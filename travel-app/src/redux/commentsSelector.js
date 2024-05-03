import { createSelector } from "reselect";

export const getCommentsSuper = createSelector(
    (state) => state.commentsPage,
    (commentsPage) => {
        console.log("222");
        return commentsPage;
    }
)