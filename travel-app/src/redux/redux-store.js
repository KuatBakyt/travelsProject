import { combineReducers, legacy_createStore as creatStore } from "redux"
import toursReducer from './toursReducer';
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

let reducers = combineReducers({
    toursPage: toursReducer,
    categoriesPage: categoriesReducer,
    usersPage: usersReducer,
    commentsPage: commentsReducer
});

let store = creatStore(reducers);

export default store;