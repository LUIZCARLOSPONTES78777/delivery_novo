import type { Request, Response } from "express";
import { getAllProducts } from "../../services/product.service.js";

export async function getProductsController(_: Request, response: Response) {
   const products = await getAllProducts();
   if (!products) {
      return response.status(200).json({ message: "Nenhum produto encontrado." });
   }
   return response.status(200).json({
      sucess: true,
      products: products
   })
}
