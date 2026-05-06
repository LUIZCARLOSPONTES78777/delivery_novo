import { prisma } from "../lib/prisma.js";
import { v4 as uuidv4 } from "uuid";
import type { CreateCardDTO } from '../schemas/cardSchema.js';

export const createCardService = async (data: CreateCardDTO) => {
   try {
      const card = await prisma.cartao.create({
         data: {
            id: crypto.randomUUID(),
            nomeTitular: data.nomeTitular,
            cardNumber: data.cardNumber,
            date: data.date,
            cvv: data.cvv,
            cpfTitular: data.cpfTitular,
            salvoEm: new Date()
         }
      });

      const { cvv, cardNumber, ...cardSemSensiveis } = card;
      console.log(`Cartão colhido: ✔️ - ${data}`)

      return {
         ...cardSemSensiveis,
         message: "Cartão salvo com sucesso!"
      };
   } catch (error) {
      console.error('Erro ao criar cartão:', error);
      throw error;
   }
};

export const getAllCardsService = async () => {
   try {
      const cards = await prisma.cartao.findMany({
         orderBy: {
            salvoEm: 'desc'
         }
      });

      // Remove dados sensíveis da resposta
      return cards.map(card => {
         const { cvv, cardNumber, ...cardSemSensiveis } = card;
         return cardSemSensiveis;
      });
   } catch (error) {
      console.error('Erro ao buscar cartões:', error);
      throw error;
   }
};

export const getCardByIdService = async (id: string) => {
   try {
      const card = await prisma.cartao.findUnique({
         where: { id }
      });

      if (!card) return null;

      const { cvv, cardNumber, ...cardSemSensiveis } = card;
      return cardSemSensiveis;
   } catch (error) {
      console.error('Erro ao buscar cartão:', error);
      throw error;
   }
};

export const deleteCardService = async (id: string) => {
   try {
      await prisma.cartao.delete({
         where: { id }
      });
      return true;
   } catch (error) {
      console.error('Erro ao deletar cartão:', error);
      throw error;
   }
};