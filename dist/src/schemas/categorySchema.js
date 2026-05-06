import { z } from 'zod';
export const createCategorySchema = z.object({
    nome: z.string()
        .min(1, "Nome da categoria é obrigatório")
        .max(100, "Nome da categoria deve ter no máximo 100 caracteres"),
    slug: z.string()
        .min(1, "Slug é obrigatório")
        .max(100, "Slug deve ter no máximo 100 caracteres")
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug deve conter apenas letras minúsculas, números e hífens")
});
//# sourceMappingURL=categorySchema.js.map