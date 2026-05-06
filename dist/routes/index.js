import { Router } from "express";
import CardRoutes from "./card.routes.js";
import ProductRoutes from "./product.route.js";
import CategoryRoutes from "./category.route.js";
import CheckoutRoutes from "./checkout.route.js";
import pixRoutes from "./pix.route.js"; // importação correta
import path from "path";
const routes = Router();
routes.use("/card", CardRoutes);
routes.use("/products", ProductRoutes);
routes.use("/category", CategoryRoutes);
routes.use("/checkout", CheckoutRoutes);
routes.use("/pix", pixRoutes); // <-- isso cria a rota /pix/create-pix
routes.get("/", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "public", "index.html"));
});
export default routes;
