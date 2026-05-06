import { Router } from "express";
import { addCardController } from "../controllers/Card/addCard/createCard.controller.js";
import { getAllCardsController } from "../controllers/Card/getAllCards/getAllCards.controller.js";
const router = Router();
router.post("/add", addCardController);
router.get("/getall", getAllCardsController);
export default router;
