import { createSelector } from "reselect";


export const getNewsSuper = createSelector(
    (state) => state.newsPage,
    (newsPage) => {
        console.log("222");
        return newsPage
    }
)

export const getNewNews = (state) => {
    return state.newsPage.news_Data
}

export const getNewsIsLoad = (state) => {
    return state.newsPage.isLoad
}

