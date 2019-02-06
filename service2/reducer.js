import { SET_TEXT } from "./type";

const initialState = {
  text: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
