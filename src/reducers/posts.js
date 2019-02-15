import _ from "lodash";
import { FETCH_POST, FETCH_POSTS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log(action.payload);
      return { ...state, [action.payload[0]._id]: action.payload[0] };
    case FETCH_POSTS:
      return _.mapKeys(action.payload, "_id");

    default:
      return state;
  }
}
