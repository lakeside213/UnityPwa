import { FETCH_PROFILE } from "../actions/types";

const INITIAL_STATE = {
  user: {},
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        user: { ...action.payload.userProfile },
        data: [...action.payload.items]
      };
      console.log(state);
      break;

    default:
      return state;
  }
}
