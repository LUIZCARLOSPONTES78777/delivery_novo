export declare function addItemToCart(pedidoId: string | undefined, productId: string, quantidade: number): Promise<string>;
export declare function getCart(pedidoId: string): import("@prisma/client").Prisma.Prisma__PedidoClient<{
    itens: ({
        product: {
            id: string;
            nome: string;
            descricao: string | null;
            preco: import("@prisma/client/runtime/library").Decimal;
            imageUrl: string | null;
            categoryId: string;
            criadoEm: Date;
            atualizadoEm: Date;
        };
    } & {
        id: string;
        preco: import("@prisma/client/runtime/library").Decimal;
        productId: string;
        quantidade: number;
        subtotal: import("@prisma/client/runtime/library").Decimal;
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
    total: import("@prisma/client/runtime/library").Decimal;
    status: import("@prisma/client").$Enums.PedidoStatus;
    pixTxId: string | null;
    pixQrCode: string | null;
    pixCopiaCola: string | null;
}, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
export declare function updateItem(itemId: string, quantidade: number): Promise<void>;
export declare function removeItem(itemId: string): Promise<void>;
//# sourceMappingURL=cart.service.d.ts.map