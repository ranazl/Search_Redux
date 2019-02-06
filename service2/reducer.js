import { SET_ITEMS } from "./type";

// const initialState = 
// {
//   text: ""
// };
const initialState = {
  items: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
}

export default reducer;
