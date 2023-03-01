import { ADDED, DECREMENT, INCREMENT, DELETED } from "./actionTypes";

export const added = (productData) => {
  return {
    type: ADDED,
    payload: productData,
  };
};

export const incrementcp = (id, count) => {
  return {
    type: INCREMENT,
    payload: { id, count },
  };
};

export const decrementcp = (id, count) => {
  return {
    type: DECREMENT,
    payload: { id, count },
  };
};

export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
