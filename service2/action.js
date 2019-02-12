import { SET_ITEMS, REMOVE_ITEMS, SET_ID} from "./type";


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


//REMOVE
  const setItemsRemove = index => {
    return {
      type: REMOVE_ITEMS,
      payload: index
    };
  };
  
  export const setDelete = (index) => {
 
      return setItemsRemove(index);
    };

    const setItemsID = () => {
      return {
        type: SET_ID,
       
      };
    };
    export const setID = () => {
 
      return setItemsID();
    };
