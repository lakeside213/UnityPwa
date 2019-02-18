import { ADD_TOAST, REMOVE_TOAST } from "./types";

let id = 0;

const defaultOptions = {
  color: "#f8bc64"
};
export default function createToast(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  };
}

export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  };
}
