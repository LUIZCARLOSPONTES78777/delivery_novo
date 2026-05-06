import { getAllProducts } from "../../services/product.service.js";
export async function getProductsController(_, response) {
    const products = await getAllProducts();
    if (!products) {
        return response.status(200).json({ message: "Nenhum produto encontrado." });
    }
    return response.status(200).json({
        sucess: true,
        products: products
    });
}
//# sourceMappingURL=getProducts.controller.js.map