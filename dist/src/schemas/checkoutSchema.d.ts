import { z } from "zod";
export declare const checkoutSchema: z.ZodObject<{
    cliente: z.ZodObject<{
        nome: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        telefone: z.ZodString;
        endereco: z.ZodString;
        cidade: z.ZodString;
        estado: z.ZodString;
        cep: z.ZodString;
    }, z.core.$strip>;
    itens: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        quantidade: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
//# sourceMappingURL=checkoutSchema.d.ts.map