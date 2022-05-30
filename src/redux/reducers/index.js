import { combineReducers } from "redux";
import { productReducers,selectProductReducer } from "./productReducers";

const reducers=combineReducers({
    allProducts:productReducers,
    product:selectProductReducer
});

export default reducers;