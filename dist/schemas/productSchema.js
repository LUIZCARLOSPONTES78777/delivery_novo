import { z } from "zod";
export const createProductSchema = z.object({
    nome: z.string().min(1, "Nome é obrigatório"),
    descricao: z.string().optional(),
    preco: z.number().positive("Preço deve ser positivo"),
    imageUrl: z.string().url("URL inválida").optional(),
    categoryId: z.string().uuid("ID de categoria inválido")
});
