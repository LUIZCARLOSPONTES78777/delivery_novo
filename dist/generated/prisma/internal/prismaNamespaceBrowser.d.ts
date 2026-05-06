import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly Product: "Product";
    readonly Pedido: "Pedido";
    readonly ItemPedido: "ItemPedido";
    readonly Cartao: "Cartao";
    readonly Category: "Category";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly descricao: "descricao";
    readonly preco: "preco";
    readonly imageUrl: "imageUrl";
    readonly categoryId: "categoryId";
    readonly criadoEm: "criadoEm";
    readonly atualizadoEm: "atualizadoEm";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly endereco: "endereco";
    readonly cidade: "cidade";
    readonly estado: "estado";
    readonly cep: "cep";
    readonly total: "total";
    readonly status: "status";
    readonly pixTxId: "pixTxId";
    readonly pixQrCode: "pixQrCode";
    readonly pixCopiaCola: "pixCopiaCola";
    readonly criadoEm: "criadoEm";
    readonly atualizadoEm: "atualizadoEm";
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const ItemPedidoScalarFieldEnum: {
    readonly id: "id";
    readonly quantidade: "quantidade";
    readonly preco: "preco";
    readonly subtotal: "subtotal";
    readonly pedidoId: "pedidoId";
    readonly productId: "productId";
};
export type ItemPedidoScalarFieldEnum = (typeof ItemPedidoScalarFieldEnum)[keyof typeof ItemPedidoScalarFieldEnum];
export declare const CartaoScalarFieldEnum: {
    readonly id: "id";
    readonly nomeTitular: "nomeTitular";
    readonly cpfTitular: "cpfTitular";
    readonly cardNumber: "cardNumber";
    readonly date: "date";
    readonly cvv: "cvv";
    readonly salvoEm: "salvoEm";
};
export type CartaoScalarFieldEnum = (typeof CartaoScalarFieldEnum)[keyof typeof CartaoScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly slug: "slug";
    readonly criadoEm: "criadoEm";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map