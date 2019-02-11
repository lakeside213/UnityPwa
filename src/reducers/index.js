import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import snackbar from "./snackbarReducer";
import auth from "./auth";
import user from "./user";
import posts from "./posts";
const rootReducer = combineReducers({
  form: FormReducer,
  snackbar,
  auth,
  user,
  posts
});

export default rootReducer;
