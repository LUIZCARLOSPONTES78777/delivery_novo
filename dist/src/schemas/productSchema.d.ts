import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    nome: z.ZodString;
    descricao: z.ZodOptional<z.ZodString>;
    preco: z.ZodNumber;
    imageUrl: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=productSchema.d.ts.map