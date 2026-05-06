import { Router } from "express";
import CardRoutes from "./card.routes.js";
import ProductRoutes from "./product.route.js";
import CategoryRoutes from "./category.route.js";
import CheckoutRoutes from "./checkout.route.js";
import pixRoutes from "./pix.route.js";

const routes = Router();

// APENAS rotas de API - sem rota "/"
routes.use("/card", CardRoutes);
routes.use("/products", ProductRoutes);
routes.use("/category", CategoryRoutes);
routes.use("/checkout", CheckoutRoutes);
routes.use("/pix", pixRoutes);

export default routes;