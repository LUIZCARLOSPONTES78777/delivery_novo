// services/category.service.ts
import { prisma } from '../../lib/prisma.js';
import type { CreateCategoryDTO } from '../schemas/categorySchema.js';


export const createCategoryService = async (data: CreateCategoryDTO) => {
   return await prisma.category.create({
      data: {
         nome: data.nome,
         slug: data.slug
      }
   });
};

export const getAllCategoryService = async () => {
   return await prisma.category.findMany({
      include: {
         produtos: {
            select: {
               id: true,
               nome: true,
               preco: true,
               descricao: true,
               imageUrl: true
            }
         }
      }
   })
}