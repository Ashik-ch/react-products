import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productListReducer } from "./Reducer/productReducer";
import { productViewReducer } from "./Reducer/productViewReducer";

const rootReducer = combineReducers({
    productList: productListReducer, // Ensure key matches useSelector
    productView: productViewReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
