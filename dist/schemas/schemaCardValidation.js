import { z } from "zod";
export const schemaCardValidation = z.object({
    cardNumber: z.string({ message: "Formato inválido ou tipo não permitido." })
        .min(16, { message: "O número do cartão precisa ter no mínimo 16 caractere" })
        .max(16, { message: "O número do cartão só pode ter no máximo 16 caractere" })
        .regex(/^\d{16}$/, "O cartão deve conter exatamente 16 números"),
    date: z.string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Validade inválida (MM/AA)")
        .refine((value) => {
        const [mes, ano] = value.split("/").map(Number);
        const agora = new Date();
        const anoAtual = agora.getFullYear() % 100; // AA
        const mesAtual = agora.getMonth() + 1;
        return (ano > anoAtual ||
            (ano === anoAtual && mes >= mesAtual));
    }, { message: "Cartão expirado" }),
    cvv: z
        .string()
        .min(3, "CVV deve ter no mínimo 3 dígitos")
        .max(4, "CVV deve ter no máximo 4 dígitos")
        .regex(/^\d+$/, "CVV deve conter apenas números")
});
