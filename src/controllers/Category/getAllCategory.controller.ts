import type { Request, Response } from "express";
import { getAllCategoryService } from "../../services/category.service.js";

export const getAllCategoriesController = async (request: Request, response: Response) => {
   try {
      const categorias = await getAllCategoryService();

      if (!categorias) {
         return response.status(200).json({
            categorias: []
         })
      }

      return response.status(200).json({ categorias: categorias });

   } catch (e) {
      response.status(500).json({ error: e })
   }
};

