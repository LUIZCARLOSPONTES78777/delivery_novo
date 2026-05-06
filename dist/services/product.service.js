import { prisma } from "../lib/prisma.js";
export async function getAllProducts() {
    const products = await prisma.product.findMany({
        orderBy: { criadoEm: "desc" }
    });
    if (!products) {
        return false;
    }
    return products;
}
export async function getProductById(id) {
    return await prisma.product.findUnique({
        where: { id },
    });
}
export function getProductsByCategory(slug) {
    return prisma.product.findMany({
        where: {
            category: {
                slug,
            },
        },
    });
}
export const createProductService = async (produto) => {
    const product = await prisma.product.create({
        data: {
            nome: produto.nome,
            preco: produto.preco,
            descricao: produto.descricao ?? "",
            imageUrl: produto.imageUrl ?? "",
            categoryId: produto.categoryId
        }
    });
    return product;
};
