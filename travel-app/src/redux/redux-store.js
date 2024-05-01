import { combineReducers, legacy_createStore as creatStore } from "redux"
import toursReducer from './toursReducer'
import categoriesReducer from "./categoriesReducer";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    toursPage: toursReducer,
    categoriesPage: categoriesReducer,
    newsPage: newsReducer
});

let store = creatStore(reducers);

export default store;