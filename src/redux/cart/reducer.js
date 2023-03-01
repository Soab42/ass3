import { ADDED, DECREMENT, DELETED, INCREMENT } from "./actionTypes";
import initialState from "./initialState";

// const nextProdId = (products) => {
//   const maxId = products.reduce(
//     (maxId, product) => Math.max(product.id, maxId),
//     -1
//   );
//   return maxId;
// };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, { ...action.payload, cart: 1 }];

    case INCREMENT:
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        }
        return {
          ...product,
          cart: product.cart + 1,
        };
      });

    case DECREMENT:
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        }
        return {
          ...product,
          cart: product.cart - 1 < 0 ? 0 : product.cart - 1,
        };
      });

    case DELETED:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
