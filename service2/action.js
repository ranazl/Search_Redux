import { SET_TEXT } from "./type";
import {store} from '../page/App3';

const setTextAction = input => {
  return {
    type: SET_TEXT,
    payload: input
  };
};

export const setText = (input) => {
    // console.warn(input)
    // return dispatch => {
    //     dispatch(setTextAction(input));
    // }
    return store.dispatch(setTextAction(input));
  };
