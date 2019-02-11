import { AUTH_USER, AUTH_ERROR, FETCH_AUTH, FETCH_USER } from "./types";
import axios from "axios";
import { reset } from "redux-form";

export const fetchUser = () => {
  return async function(dispatch) {
    let config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    const response = await axios.get(
      "http://localhost:8080/current_user",
      config
    );
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

      dispatch(reset("signin"));
      localStorage.setItem("token", res.data.token);
      history.push(from.pathname);
      dispatch({
        type: AUTH_USER,
        payload: res.data.token
      });
      dispatch(fetchUser());
    } catch (e) {
      console.log(e);
      dispatch({ type: AUTH_ERROR, payload: "Email or Username in use " });
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
