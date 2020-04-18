import * as Types from "../Types";

export default (state, action) => {
  switch (action.type) {
    case Types.GET:
      return { ...state, something: action.payload };

    default:
      return state;
  }
};
