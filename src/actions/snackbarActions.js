import { ADD_SNACKBAR, REMOVE_SNACKBAR } from "./types";

export const addSnackbar = snackbarDetails => {
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
export const removeSnackbar = () => {
  return {
    type: REMOVE_SNACKBAR,
    isOpen: false
  };
};
