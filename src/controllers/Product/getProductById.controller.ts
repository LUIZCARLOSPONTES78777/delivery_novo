import type { Request, Response } from "express";
import { getProductById } from "../../services/product.service.js";

export async function getProductByIdController(request: Request, response: Response) {
   try {
      const { id } = request.params;
      const product = await getProductById(id as string);

      if (!product) {
         return response.status(200).json({ product: product });
      }
      return response.status(200).json({ produto: product });
   } catch (e) {
      console.log(e);
      throw new Error("Aconteceu algum erro.")
   }

}