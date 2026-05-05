import type { Request, Response } from "express";
import { getProductsByCategory } from "../../services/product.service.js";

export async function getProductsByCategoryController(req: Request, res: Response) {
   const { slug } = req.params;

   if (!slug) {
      return res.status(400).json({
         sucess: false,
         message: "Categoria não encontrada!"
      });
   }

   const products = await getProductsByCategory(slug as string);
   res.json({ produtos: products });
}