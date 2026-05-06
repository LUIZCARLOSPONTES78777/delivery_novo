import { Router } from "express";
import { createCategoryController } from "../controllers/Category/createCategory.controller.js";
import { getAllCategoriesController } from "../controllers/Category/getAllCategory.controller.js";
import { getProductsByCategoryController } from "../controllers/Product/getProductByCategory.controller.js";
const router = Router();
router.post("/", createCategoryController);
router.get("/all", getAllCategoriesController);
router.get("/:slug/products", getProductsByCategoryController);
export default router;
