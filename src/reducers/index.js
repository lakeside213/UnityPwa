import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import snackbar from "./snackbarReducer";
import auth from "./auth";
import user from "./user";
import posts from "./posts";
import comments from "./comments";
import profile from "./profile";
const rootReducer = combineReducers({
  form: FormReducer,
  snackbar,
  auth,
  user,
  posts,
  comments,
  profile
});

export default rootReducer;
