import { FETCH_USER } from "./types";
export const fetch = snackbarDetails => {
  const message = "dh";
  const icon = "";
  console.log("snackbar fired");
  return {
    type: ADD_SNACKBAR,
    message,
    icon,
    isOpen: true
  };
};
