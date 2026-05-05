import { Router } from "express";
import { checkoutController } from "../controllers/Checkout/checkout.controller.js";

const router = Router();

router.post("/", checkoutController);

export default router;