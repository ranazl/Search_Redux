import { RED, BLUE, PINK, YELLOW, LASTNAME, FIRSTNAME } from "./type";

const initialState = {
  color: "purple",
  name: "Name",
  Lastname: "",
  Firstname: "",
  text: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RED:
      return {
        ...state,
        color: "red",
        name: "Ali",
        Lastname: state.Lastname,
        Firstname: state.Firstname
      };
    case BLUE:
      return {
        ...state,
        color: "blue",
        name: "Mamad",
        Lastname: state.Lastname,
        Firstname: state.Firstname
      };
    case PINK:
      return {
        ...state,
        color: "pink",
        name: "Mina",
        Lastname: state.Lastname,
        Firstname: state.Firstname
      };
    case YELLOW:
      return {
        ...state,
        color: "yellow",
        name: "Jafar",
        Lastname: state.Lastname,
        Firstname: state.Firstname
      };
    case FIRSTNAME:
      return {
        ...state,
        Firstname: action.changeF.Firstname
      };
    case LASTNAME:
      return {
        ...state,
        Lastname: action.changel.Lastname
      };

    default:
      return state;
  }
}

export default reducer;
