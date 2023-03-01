import { ADD_PRODUCT, DEC_COUNT, INC_COUNT } from "./actionTypes";

export const addproduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const deccount = (id, count) => {
  return {
    type: DEC_COUNT,
    payload: { id, count },
  };
};
export const inccount = (id, count) => {
  return {
    type: INC_COUNT,
    payload: { id, count },
  };
};
