import type { CreateCategoryDTO } from '../schemas/categorySchema.js';
export declare const createCategoryService: (data: CreateCategoryDTO) => Promise<{
    id: string;
    nome: string;
    criadoEm: Date;
    slug: string;
}>;
export declare const getAllCategoryService: () => Promise<({
    produtos: {
        id: string;
        nome: string;
        descricao: string;
        preco: import("@prisma/client/runtime/client").Decimal;
        imageUrl: string;
    }[];
} & {
    id: string;
    nome: string;
    criadoEm: Date;
    slug: string;
})[]>;
//# sourceMappingURL=category.service.d.ts.map