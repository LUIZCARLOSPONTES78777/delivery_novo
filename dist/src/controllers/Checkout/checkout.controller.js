import { checkoutSchema } from "../../schemas/checkoutSchema.js";
import { createOrderService } from "../../services/order.service.js";
export const checkoutController = async (request, response) => {
    try {
        // 1. Valida os dados vindo do front (LocalStorage + Formuário)
        const validation = checkoutSchema.safeParse(request.body);
        if (!validation.success) {
            return response.status(400).json({ errors: validation.error.flatten().fieldErrors });
        }
        const { cliente, itens } = validation.data;
        // 2. Chama o Service para criar o pedido usando transaction
        // (A lógica que enviei na resposta anterior usando prisma.$transaction)
        const pedido = await createOrderService(cliente, itens);
        return response.status(201).json({
            success: true,
            message: "Pedido recebido!",
            pedidoId: pedido.id
        });
    }
    catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=checkout.controller.js.map