import type { Request, Response } from "express";
import { createCardService } from "../../../services/cards.service.js";
import { createCardSchema } from "../../../schemas/cardSchema.js";

export const addCardController = async (
   request: Request,
   response: Response
) => {
   try {
      const data = createCardSchema.parse(request.body);

      const card = await createCardService(data);

      return response.status(201).json(card);
   } catch (error: any) {
      return response.status(400).json({
         message: error.errors ?? "Erro ao criar cartão",
      });
   }
};