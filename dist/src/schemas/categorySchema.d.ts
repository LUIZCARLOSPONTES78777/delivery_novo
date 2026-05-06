import { z } from 'zod';
export declare const createCategorySchema: z.ZodObject<{
    nome: z.ZodString;
    slug: z.ZodString;
}, z.core.$strip>;
export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;
//# sourceMappingURL=categorySchema.d.ts.map