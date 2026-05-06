import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategoriesController = async (req, res) => {
   try {
      const categorias = await prisma.category.findMany({
         include: {
            produtos: true
         }
      });

      res.json(categorias);
   } catch (error) {
      console.error("🔥 ERRO REAL:", error);

      res.status(500).json({
         error: String(error),
      });
   }
};