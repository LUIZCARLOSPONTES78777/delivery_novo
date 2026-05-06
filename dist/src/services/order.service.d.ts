export declare const createOrderService: (cliente: any, itens: any[]) => Promise<{
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
}>;
//# sourceMappingURL=order.service.d.ts.map