import { prisma } from "../../lib/prisma.js";
import { v4 as uuid } from "uuid";

export async function getAllProducts() {

   const products = await prisma.product.findMany({
      orderBy: { criadoEm: "desc" }
   })

   if (!products) {
      return false;
   }

   return products;
}

export async function getProductById(id: string) {
   return await prisma.product.findUnique({
      where: { id },
   });
}

export function getProductsByCategory(slug: string) {
   return prisma.product.findMany({
      where: {
         category: {
            slug,
         },
      },
   });
}

interface CreateProductDTO {
   nome: string;
   preco: number;
   descricao?: string | undefined;
   imageUrl?: string | undefined;
   categoryId: string;
}

export const createProductService = async (produto: CreateProductDTO) => {
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