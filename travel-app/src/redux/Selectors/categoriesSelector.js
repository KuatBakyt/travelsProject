import { createSelector } from "reselect";

export const getCategoriesSuper = createSelector(
    (state) => state.categoriesPage,
    (categoriesPage) => {
        return categoriesPage;
    }
)