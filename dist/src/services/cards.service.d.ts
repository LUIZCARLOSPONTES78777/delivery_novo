import type { CreateCardDTO } from '../schemas/cardSchema.js';
export declare const createCardService: (data: CreateCardDTO) => Promise<{
    message: string;
    nomeTitular: string;
    date: string;
    cpfTitular: string | null;
    id: string;
    salvoEm: Date;
}>;
export declare const getAllCardsService: () => Promise<{
    nomeTitular: string;
    date: string;
    cpfTitular: string | null;
    id: string;
    salvoEm: Date;
}[]>;
export declare const getCardByIdService: (id: string) => Promise<{
    nomeTitular: string;
    date: string;
    cpfTitular: string | null;
    id: string;
    salvoEm: Date;
}>;
export declare const deleteCardService: (id: string) => Promise<boolean>;
//# sourceMappingURL=cards.service.d.ts.map