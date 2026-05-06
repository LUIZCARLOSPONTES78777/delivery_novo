export declare function addItemToCart(pedidoId: string | undefined, productId: string, quantidade: number): Promise<string>;
export declare function getCart(pedidoId: string): import("../../generated/prisma/models.js").Prisma__PedidoClient<{
    itens: ({
        product: {
            id: string;
            nome: string;
            descricao: string | null;
            preco: import("@prisma/client/runtime/client").Decimal;
            imageUrl: string | null;
            categoryId: string;
            criadoEm: Date;
            atualizadoEm: Date;
        };
    } & {
        id: string;
        preco: import("@prisma/client/runtime/client").Decimal;
        productId: string;
        quantidade: number;
        subtotal: import("@prisma/client/runtime/client").Decimal;
        pedidoId: string;
    })[];
} & {
    id: string;
    nome: string;
    criadoEm: Date;
    atualizadoEm: Date;
    email: string | null;
    telefone: string | null;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    total: import("@prisma/client/runtime/client").Decimal;
    status: import("../../generated/prisma/enums.js").PedidoStatus;
    pixTxId: string | null;
    pixQrCode: string | null;
    pixCopiaCola: string | null;
}, null, import("@prisma/client/runtime/client").DefaultArgs, {
    omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig;
}>;
export declare function updateItem(itemId: string, quantidade: number): Promise<void>;
export declare function removeItem(itemId: string): Promise<void>;
//# sourceMappingURL=cart.service.d.ts.map