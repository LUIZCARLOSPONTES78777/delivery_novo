import { z } from "zod";
export const checkoutSchema = z.object({
    cliente: z.object({
        nome: z.string().min(3, "Nome é obrigatório"),
        email: z.string().email("E-mail inválido").optional(),
        telefone: z.string().min(10, "Telefone inválido"),
        endereco: z.string().min(5, "Endereço é obrigatório"),
        cidade: z.string(),
        estado: z.string().length(2),
        cep: z.string().min(8)
    }),
    itens: z.array(z.object({
        productId: z.string().uuid("ID de produto inválido"),
        quantidade: z.number().int().positive("A quantidade deve ser maior que zero")
    })).min(1, "O carrinho não pode estar vazio")
});
//# sourceMappingURL=checkoutSchema.js.map