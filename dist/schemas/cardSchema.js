import { z } from "zod";
export const createCardSchema = z.object({
    nomeTitular: z.string().min(3, 'Nome do titular deve ter pelo menos 3 caracteres'),
    cardNumber: z.string().regex(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos'),
    date: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Data deve estar no formato MM/AA'),
    cvv: z.string().regex(/^\d{3,4}$/, 'CVV deve ter 3 ou 4 dígitos'),
    cpfTitular: z.string().regex(/^\d{11}$/, 'CPF deve ter 11 dígitos')
});
