import { combineReducers, legacy_createStore as creatStore } from "redux"
import toursReducer from './toursReducer'

let reducers = combineReducers({
    toursPage: toursReducer,
});

let store = creatStore(reducers);

export default store;