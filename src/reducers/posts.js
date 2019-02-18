import _ from "lodash";
import { FETCH_POST, FETCH_POSTS } from "../actions/types";

const INITIAL_STATE = {
  post: {},
  posts: []
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      console.log(action.payload);
      return { ...state, post: action.payload };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}
