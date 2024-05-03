import { createSelector } from "reselect";

export const getToursSuper = createSelector(
    (state) => state.toursPage,
    (toursPage) => {
        console.log("222");
        return toursPage;
    }
)