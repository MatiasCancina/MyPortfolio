import { TYPES } from "./actions";

const initialState = {
  language: "en",
  theme: "light",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case TYPES.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
