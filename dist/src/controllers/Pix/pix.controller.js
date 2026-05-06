import fetch from "node-fetch";
export const pixGenerateController = async (request, response) => {
    try {
        const { valor, customer } = request.body;
        const publicKey = process.env.PUBLIC_KEY;
        const secretKey = process.env.SECRET_KEY;
        if (!valor || Number(valor) <= 0) {
            return response.status(400).json({
                success: false,
                message: "Valor inválido."
            });
        }
        if (!customer?.name) {
            return response.status(400).json({
                success: false,
                message: "Nome do cliente é obrigatório."
            });
        }
        if (!publicKey || !secretKey) {
            return response.status(500).json({
                success: false,
                message: "Chaves da API não configuradas."
            });
        }
        const amountInCents = Math.round(Number(valor) * 100);
        // 👉 CPF fictício garantido no backend
        const document = customer.document?.replace(/\D/g, "") || "11144477735";
        const requestBody = {
            amount: amountInCents,
            paymentMethod: "pix",
            currency: "BRL",
            capture: true,
            description: `Pedido TemDiTudo - R$ ${Number(valor).toFixed(2)}`,
            customer: {
                name: customer.name,
                email: customer.email || "cliente@temditudo.com",
                document,
                phone: customer.phone || "11999999999"
            },
            items: [
                {
                    title: "Pedido TemDiTudo",
                    quantity: 1,
                    unit_price: amountInCents,
                    tangible: false
                }
            ]
        };
        const authString = Buffer.from(`${secretKey}:${publicKey}`).toString("base64");
        const apiResponse = await fetch("https://api.anubispay.com.br/v1/transactions", {
            method: "POST",
            headers: {
                accept: "application/json",
                authorization: `Basic ${authString}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        const responseText = await apiResponse.text();
        const data = JSON.parse(responseText);
        if (!apiResponse.ok) {
            return response.status(apiResponse.status).json({
                success: false,
                message: data.message || "Erro ao gerar PIX",
                error: data.error || data
            });
        }
        const pix = data.pix;
        return response.status(200).json({
            success: true,
            transactionId: data.id,
            amount: data.amount,
            qrCode: pix.qrcode_image,
            pixCode: pix.qrcode || pix.copy_paste,
            expiresAt: pix.expires_at
        });
    }
    catch (error) {
        console.error("Erro PIX:", error);
        return response.status(500).json({
            success: false,
            message: "Erro interno ao gerar PIX"
        });
    }
};
//# sourceMappingURL=pix.controller.js.map