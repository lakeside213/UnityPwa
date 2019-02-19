import { AUTH_USER, AUTH_ERROR, FETCH_AUTH, FETCH_USER } from "./types";
import axios from "axios";
import { reset } from "redux-form";
import { URL } from "../url";

export const fetchUser = () => {
  return async function(dispatch) {
    let config = {
      headers: {
        bearer: localStorage.getItem("token")
      }
    };
    const response = await axios.get(`${URL}/current_user`, config);

    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
export const fetchAuth = () => {
  return async function(dispatch) {
    dispatch({
      type: FETCH_AUTH
    });
  };
};
export const signup = ({ username, email, password }, history, from) => {
  return async function(dispatch) {
    try {
      const res = await axios.post(`${URL}/signup`, {
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
      const res = await axios.post(`${URL}/signin`, {
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
