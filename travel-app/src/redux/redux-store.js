import { combineReducers, legacy_createStore as creatStore } from "redux"
import toursReducer from './toursReducer'
import categoriesReducer from "./categoriesReducer";

let reducers = combineReducers({
    toursPage: toursReducer,
    categoriesPage: categoriesReducer
});

let store = creatStore(reducers);

export default store;