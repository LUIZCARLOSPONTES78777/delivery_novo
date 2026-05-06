import { z } from "zod";
export declare const createCardSchema: z.ZodObject<{
    nomeTitular: z.ZodString;
    cardNumber: z.ZodString;
    date: z.ZodString;
    cvv: z.ZodString;
    cpfTitular: z.ZodString;
}, z.core.$strip>;
export type CreateCardDTO = z.infer<typeof createCardSchema>;
//# sourceMappingURL=cardSchema.d.ts.map