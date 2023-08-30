import { TYPES } from "./actions";

const initialState = {
  language: "en",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer
