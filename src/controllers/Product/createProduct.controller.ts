import type { Request, Response } from "express";
import { createProductService } from "../../services/product.service.js";
import { createProductSchema } from "../../schemas/productSchema.js";

export const createProductController = async (
   request: Request,
   response: Response
) => {
   try {
      const { nome, descricao, preco, imageUrl, categoryId } = request.body;
      // nome , descricao, preco, imageUrl, categoryId
      if (!nome || !preco || !categoryId) {
         return response.status(400).json({
            message: "nome, preço e categoria são obrigatórios!"
         });
      }
      // 1. Primeiro, veja qual schema você realmente tem
      console.log("Request body:", request.body);

      // 2. Valide diretamente o request.body
      const result = createProductSchema.safeParse(request.body);

      if (!result.success) {
         console.log("Erros de validação:", result.error);
         return response.status(400).json({
            success: false,
            message: "Dados inválidos!",
            errors: result.error.flatten()
         });
      }

      console.log("Dados validados:", result.data);

      const product = await createProductService(result.data);

      return response.status(201).json(product);
   } catch (error: any) {
      console.error("Erro no controller:", error);
      return response.status(400).json({
         message: "Erro ao criar produto",
         error: error.message,
      });
   }
};