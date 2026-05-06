import { getAllCategoryService } from "../../services/category.service.js";
export const getAllCategoriesController = async (request, response) => {
    try {
        const categorias = await getAllCategoryService();
        if (!categorias) {
            return response.status(200).json({
                categorias: []
            });
        }
        return response.status(200).json({ categorias: categorias });
    }
    catch (e) {
        response.status(500).json({ error: e });
    }
};
//# sourceMappingURL=getAllCategory.controller.js.map