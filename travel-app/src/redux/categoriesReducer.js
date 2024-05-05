let SET_CATEGORIES = "SET_CATEGORIES"

let initialState = {
    categories_Data: []
 }
 
 const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
     case SET_CATEGORIES: {
            return {
              ...state,
              categories_Data: action.categories_Data
            }
     }
        default:
            return state;
    }
   
 }

export const setCategoriesAcAcr = (categories_Data) => {
    return { type: SET_CATEGORIES, categories_Data: categories_Data }
}
 
 export default categoriesReducer;