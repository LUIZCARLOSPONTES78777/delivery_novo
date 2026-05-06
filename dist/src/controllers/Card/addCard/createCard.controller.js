import { createCardService } from "../../../services/cards.service.js";
import { createCardSchema } from "../../../schemas/cardSchema.js";
export const addCardController = async (request, response) => {
    try {
        const data = createCardSchema.parse(request.body);
        const card = await createCardService(data);
        return response.status(201).json(card);
    }
    catch (error) {
        return response.status(400).json({
            message: error.errors ?? "Erro ao criar cartão",
        });
    }
};
//# sourceMappingURL=createCard.controller.js.map