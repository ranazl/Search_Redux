import { SET_ITEMS } from "./type";

const setItemsAction = input => {
  return {
    type: SET_ITEMS,
    payload: input
  };
};

export const setItems = (input) => {
    // console.warn(input)
    // return dispatch => {
    //     dispatch(setTextAction(input));
    // }
    return setItemsAction(input);
  };
