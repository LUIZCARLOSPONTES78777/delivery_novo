import { prisma } from "../lib/prisma.js";
export async function addItemToCart(pedidoId, productId, quantidade) {
    const product = await prisma.product.findUnique({
        where: { id: productId },
    });
    if (!product)
        throw new Error("Produto não encontrado");
    let pedido = pedidoId
        ? await prisma.pedido.findUnique({ where: { id: pedidoId } })
        : null;
    if (!pedido) {
        pedido = await prisma.pedido.create({
            data: {
                nome: "Cliente",
                endereco: "Não informado",
                cidade: "Não informado",
                estado: "NA",
                cep: "00000000",
                total: 0,
            },
        });
    }
    const item = await prisma.itemPedido.findFirst({
        where: { pedidoId: pedido.id, productId },
    });
    if (item) {
        await prisma.itemPedido.update({
            where: { id: item.id },
            data: {
                quantidade: item.quantidade + quantidade,
                subtotal: {
                    increment: Number(product.preco) * quantidade,
                },
            },
        });
    }
    else {
        await prisma.itemPedido.create({
            data: {
                pedidoId: pedido.id,
                productId,
                quantidade,
                preco: product.preco,
                subtotal: Number(product.preco) * quantidade,
            },
        });
    }
    await recalcularTotal(pedido.id);
    return pedido.id;
}
export function getCart(pedidoId) {
    return prisma.pedido.findUnique({
        where: { id: pedidoId },
        include: {
            itens: {
                include: {
                    product: true,
                },
            },
        },
    });
}
export async function updateItem(itemId, quantidade) {
    const item = await prisma.itemPedido.findUnique({
        where: { id: itemId },
    });
    if (!item)
        throw new Error("Item não encontrado");
    await prisma.itemPedido.update({
        where: { id: itemId },
        data: {
            quantidade,
            subtotal: Number(item.preco) * quantidade,
        },
    });
    await recalcularTotal(item.pedidoId);
}
export async function removeItem(itemId) {
    const item = await prisma.itemPedido.findUnique({
        where: { id: itemId },
    });
    if (!item)
        return;
    await prisma.itemPedido.delete({
        where: { id: itemId },
    });
    await recalcularTotal(item.pedidoId);
}
async function recalcularTotal(pedidoId) {
    const itens = await prisma.itemPedido.findMany({
        where: { pedidoId },
    });
    const total = itens.reduce((acc, item) => acc + Number(item.subtotal), 0);
    await prisma.pedido.update({
        where: { id: pedidoId },
        data: { total },
    });
}
