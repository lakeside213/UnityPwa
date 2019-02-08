import { AUTH_USER, AUTH_ERROR, FETCH_AUTH } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_AUTH:
      return { ...state };
      break;
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
      break;
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
