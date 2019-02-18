import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import toasts from "./toasts";
import auth from "./auth";
import user from "./user";
import posts from "./posts";
import profile from "./profile";
const rootReducer = combineReducers({
  form: FormReducer,
  toasts,
  auth,
  user,
  posts,
  profile
});

export default rootReducer;
