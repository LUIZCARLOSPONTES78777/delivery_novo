import { Router } from "express";
import axios, { AxiosError } from "axios";

const router = Router();

router.post("/create-pix", async (req, res) => {
   try {
      console.log("📦 Dados recebidos:", JSON.stringify(req.body, null, 2));

      const { customer, items, total } = req.body;

      if (!customer || !items || !total) {
         console.log("❌ Dados incompletos");
         return res.status(400).json({ error: "Dados incompletos" });
      }

      console.log("🔑 Verificando chaves da Anubis...");
      const ANUBIS_PUBLIC_KEY = process.env.PUBLIC_KEY;
      const ANUBIS_SECRET_KEY = process.env.SECRET_KEY;

      console.log("🔑 ANUBIS_PUBLIC_KEY existe?", !!ANUBIS_PUBLIC_KEY);
      console.log("🔑 ANUBIS_SECRET_KEY existe?", !!ANUBIS_SECRET_KEY);

      if (!ANUBIS_PUBLIC_KEY || !ANUBIS_SECRET_KEY) {
         console.log("❌ Chaves da Anubis não configuradas");
         return res.status(500).json({ error: "Chaves da Anubis não configuradas" });
      }

      const auth = "Basic " + Buffer.from(`${ANUBIS_PUBLIC_KEY}:${ANUBIS_SECRET_KEY}`).toString("base64");

      const payload = {
         amount: Math.round(total * 100),
         paymentMethod: "pix",
         items: items.map((item: any) => ({
            title: item.title,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            tangible: false
         })),
         customer: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            document: {
               type: "cpf",
               number: customer.document
            }
         },
         pix: {
            expiresInDays: 1
         }
      };

      console.log("📤 Payload enviado para Anubis:", JSON.stringify(payload, null, 2));

      const response = await axios.post("https://api.anubispay.com.br/v1/transactions", payload, {
         headers: {
            "Authorization": auth,
            "Content-Type": "application/json"
         }
      });

      console.log("✅ Resposta da Anubis recebida com sucesso!");
      console.log("📊 Status:", response.status);
      console.log("📊 Dados:", JSON.stringify(response.data, null, 2));

      const pixData = response.data.pix || response.data;

      return res.json({
         qrCode: pixData.qrcode || pixData.qrCode || pixData.qrCodeImage || '',
         brCode: pixData.brCode || pixData.qrCodeUrl || pixData.qrcode || ''
      });

   } catch (error) {
      // Type assertion para AxiosError
      const err = error as AxiosError;

      console.error("❌❌❌ ERRO DETALHADO:");
      console.error("Mensagem:", err.message);
      console.error("Stack:", err.stack);

      if (err.response) {
         // Erro com resposta da API
         console.error("Status da resposta:", err.response.status);
         console.error("Dados da resposta:", JSON.stringify(err.response.data, null, 2));
         console.error("Headers da resposta:", err.response.headers);

         return res.status(err.response.status).json({
            error: "Erro na integração com Anubis",
            details: err.response.data
         });
      } else if (err.request) {
         // Requisição foi feita mas não houve resposta
         console.error("Requisição feita mas sem resposta:", err.request);
         return res.status(503).json({
            error: "Serviço de pagamento indisponível",
            details: "Sem resposta da Anubis"
         });
      } else {
         // Erro na configuração da requisição
         console.error("Erro na configuração da requisição:", err.message);
         return res.status(500).json({
            error: "Erro interno no servidor",
            details: err.message
         });
      }
   }
});

export default router;