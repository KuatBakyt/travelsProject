import { createSelector } from "reselect";

export const getIsLoad =(state) => {
    return state.commentsPage.isLoad
}

export const getCommentsSuper = createSelector(
    (state) => state.commentsPage,
    (commentsPage) => {
        return commentsPage;
    }
)