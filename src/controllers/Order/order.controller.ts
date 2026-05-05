import type { Request, Response } from "express";
import { createOrderService } from "../../services/order.service.js";

export const checkoutController = async (req: Request, res: Response) => {
   try {
      // O frontend envia os dados do cliente + o array do LocalStorage
      const { cliente, itens } = req.body;

      if (!itens || itens.length === 0) {
         return res.status(400).json({ message: "O carrinho está vazio." });
      }

      const novoPedido = await createOrderService(cliente, itens);

      return res.status(201).json({
         success: true,
         message: "Pedido realizado com sucesso!",
         pedidoId: novoPedido.id
      });
   } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: error.message });
   }
};