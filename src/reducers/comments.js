import _ from "lodash";
import { FETCH_COMMENTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return _.mapKeys(action.payload, "_id");

    default:
      return state;
  }
}
