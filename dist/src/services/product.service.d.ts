export declare function getAllProducts(): Promise<false | {
    id: string;
    nome: string;
    descricao: string | null;
    preco: import("@prisma/client/runtime/client").Decimal;
    imageUrl: string | null;
    categoryId: string;
    criadoEm: Date;
    atualizadoEm: Date;
}[]>;
export declare function getProductById(id: string): Promise<{
    id: string;
    nome: string;
    descricao: string | null;
    preco: import("@prisma/client/runtime/client").Decimal;
    imageUrl: string | null;
    categoryId: string;
    criadoEm: Date;
    atualizadoEm: Date;
}>;
export declare function getProductsByCategory(slug: string): import("../../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
    id: string;
    nome: string;
    descricao: string | null;
    preco: import("@prisma/client/runtime/client").Decimal;
    imageUrl: string | null;
    categoryId: string;
    criadoEm: Date;
    atualizadoEm: Date;
}[]>;
interface CreateProductDTO {
    nome: string;
    preco: number;
    descricao?: string | undefined;
    imageUrl?: string | undefined;
    categoryId: string;
}
export declare const createProductService: (produto: CreateProductDTO) => Promise<{
    id: string;
    nome: string;
    descricao: string | null;
    preco: import("@prisma/client/runtime/client").Decimal;
    imageUrl: string | null;
    categoryId: string;
    criadoEm: Date;
    atualizadoEm: Date;
}>;
export {};
//# sourceMappingURL=product.service.d.ts.map