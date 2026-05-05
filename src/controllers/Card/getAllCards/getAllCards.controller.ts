import type { Request, Response } from "express";
import { getAllCardsService } from "../../../services/cards.service.js";

export const getAllCardsController = async (
   request: Request,
   response: Response
) => {
   try {
      const cards = await getAllCardsService();
      return response.status(200).json({ cards: cards });
   } catch (error) {
      return response.status(500).json({ message: "Erro ao buscar cartões" });
   }
};