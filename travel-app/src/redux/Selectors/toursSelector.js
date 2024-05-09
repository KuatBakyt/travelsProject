import { createSelector } from "reselect";

export const getCurrentTourse = (state) => {
    return state.toursPage.toursData
}

export const getOrders = (state) => {
    return state.toursPage.orders
}

export const getIsLoad = (state) => {
    return state.toursPage.isload
}

export const getToursSuper = createSelector(
    (state) => state.toursPage,
    (toursPage) => {
        return toursPage;
    }
)