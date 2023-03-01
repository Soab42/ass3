import { ADD_PRODUCT } from "./actionTypes";
import initialState from "./initialState";

const nextProdId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(product.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: nextProdId(state),
          data: { id: nextProdId(state), ...action.payload },
        },
      ];
    default:
      return state;
  }
};

export default reducer;
