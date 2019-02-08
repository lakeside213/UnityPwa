import { FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  user: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload };
      break;

    default:
      return state;
  }
}
