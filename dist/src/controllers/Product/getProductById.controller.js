import { getProductById } from "../../services/product.service.js";
export async function getProductByIdController(request, response) {
    try {
        const { id } = request.params;
        const product = await getProductById(id);
        if (!product) {
            return response.status(200).json({ product: product });
        }
        return response.status(200).json({ produto: product });
    }
    catch (e) {
        console.log(e);
        throw new Error("Aconteceu algum erro.");
    }
}
//# sourceMappingURL=getProductById.controller.js.map