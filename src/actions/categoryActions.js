import * as ActionTypes from './ActionTypes'
import CategoriesApi from "../middleware/CategoriesApi";

export function loadCategoriesSuccess(categories) {
    return {type: ActionTypes.LOAD_CATEGORIES_SUCCESS, categories};
}
export function loadCategories() {
    return function(dispatch) {
        return CategoriesApi.getCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}
