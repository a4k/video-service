import {clientV3} from "./ApiV3Client";

class CategoriesApi {
    static getCategories() {
        return clientV3.get('/categories')
    }
}

export default CategoriesApi;
