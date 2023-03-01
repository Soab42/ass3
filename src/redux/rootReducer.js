import { combineReducers } from "redux";
import filterReducer from "./product/reducer";
import todoReducer from "./cart/reducer";

const rootReducer = combineReducers({
  cart: todoReducer,
  product: filterReducer,
});

export default rootReducer;
