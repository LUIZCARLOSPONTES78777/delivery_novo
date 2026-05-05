import type { Request, Response } from "express";
import { createCategorySchema } from "../../schemas/categorySchema.js";
import { createCategoryService } from "../../services/category.service.js";


export const createCategoryController = async (
   request: Request,
   response: Response
) => {
   try {
      const { nome, slug } = request.body;

      if (!nome || !slug) return response.status(400).json({ sucess: false, message: "Nome e slug são obrigatórios!" })
      const result = createCategorySchema.safeParse({
         nome,
         slug
      });

      if (!result.success) {
         return response.status(400).json({
            success: false,
            message: "Dados inválidos",
            errors: result.error.flatten()
         });
      }

      // const existingCategory = await getCategoryBySlugService(result.data.slug);
      // if (existingCategory) {
      //    return response.status(409).json({
      //       success: false,
      //       message: "Já existe uma categoria com este slug"
      //    });
      // }

      const category = await createCategoryService(result.data);

      return response.status(201).json({
         success: true,
         message: "Categoria criada com sucesso",
         data: category
      });
   } catch (error: any) {
      console.error("Erro ao criar categoria:", error);

      if (error.code === 'P2002') {
         return response.status(409).json({
            success: false,
            message: "Já existe uma categoria com este slug ou nome"
         });
      }

      return response.status(500).json({
         success: false,
         message: "Erro interno do servidor",
         error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
   }
};