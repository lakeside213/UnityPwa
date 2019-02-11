import { CREATE_POST, FETCH_USER, FETCH_POST, FETCH_POSTS } from "./types";
import axios from "axios";
import { reset } from "redux-form";

export const createPost = (formValues, history) => {
  return async function(dispatch) {
    let config = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    const response = await axios.post(
      "http://localhost:8080/posts",
      formValues,
      config
    );
    console.log(response);
    history.push(`/app/topic/${response.data}`);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
export const fetchPosts = () => {
  return async function(dispatch) {
    const response = await axios.post("http://localhost:8080/fetch/posts", {
      filter: "ll"
    });
    console.log(response);

    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};
export const fetchPost = id => {
  return async function(dispatch) {
    const response = await axios.post("http://localhost:8080/post", {
      id: id
    });
    console.log(response);
    dispatch({
      type: FETCH_POST,
      payload: response.data
    });
  };
};
