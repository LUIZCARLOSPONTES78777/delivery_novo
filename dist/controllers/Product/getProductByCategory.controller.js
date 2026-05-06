import { getProductsByCategory } from "../../services/product.service.js";
export async function getProductsByCategoryController(req, res) {
    const { slug } = req.params;
    if (!slug) {
        return res.status(400).json({
            sucess: false,
            message: "Categoria não encontrada!"
        });
    }
    const products = await getProductsByCategory(slug);
    res.json({ produtos: products });
}
