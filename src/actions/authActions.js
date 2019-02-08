import { AUTH_USER, AUTH_ERROR, FETCH_AUTH, FETCH_USER } from "./types";
import axios from "axios";
import { reset } from "redux-form";

export const fetchUser = () => {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:8080/current_user");
    console.log(response.data);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};

export const signup = ({ username, email, password }, history, from) => {
  return async function(dispatch) {
    try {
      const res = await axios.post("http://localhost:8080/signup", {
        username,
        email,
        password
      });

      dispatch(reset("signup"));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      history.push(from.pathname);
      dispatch({
        type: AUTH_USER,
        payload: res.data.token
      });
      dispatch(fetchUser());
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email or Username in use " });
    }
  };
};

export const signin = ({ email, password }, history, from) => {
  return async function(dispatch) {
    try {
      const res = await axios.post("http://localhost:8080/signin", {
        email,
        password
      });

      dispatch(reset("sigin"));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      history.push(from.pathname);
      dispatch({
        type: AUTH_USER,
        payload: res.data.token
      });
      dispatch(fetchUser());
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: "Email or Username in use " });
    }
  };
};
export const fetchAuth = () => {
  return {
    type: FETCH_AUTH
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return {
    type: AUTH_USER,
    payload: "",
    user: {}
  };
};
