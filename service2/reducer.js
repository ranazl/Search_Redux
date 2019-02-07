import { SET_ITEMS,REMOVE_ITEMS } from "./type";

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
//REMOVE
      case REMOVE_ITEMS:
      if (state.setItemsRemove.indexOf(action.payload) > -1)
      {  return {
        ...state,
        setItemsRemove: state.filter(item => item !== action.payload)
      };
}
      
    default:
      return state;
  }
}

export default reducer;
