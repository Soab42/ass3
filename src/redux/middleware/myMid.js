import { ADDED, INCREMENT } from "../cart/actionTypes";

const myMid = (state) => (next) => (action) => {
  const cart = state.getState().cart;
  console.log(action);
  if (action.type === ADDED) {
    if (cart.find((id) => id.id === action.payload.id)) {
      return next({
        type: INCREMENT,
        payload: { id: action.payload.id, count: 1 },
      });
    }
    return next(action);
  } else {
    return next(action);
  }
  // return next(action);
};

export default myMid;
