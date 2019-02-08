import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import snackbar from "./snackbarReducer";
import auth from "./auth";
import user from "./user";
const rootReducer = combineReducers({
  form: FormReducer,
  snackbar,
  auth,
  user
});

export default rootReducer;
