import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

import myMid from "./middleware/myMid";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myMid))
);

export default store;
