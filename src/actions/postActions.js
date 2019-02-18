import {
  CREATE_POST,
  FETCH_USER,
  FETCH_POST,
  FETCH_POSTS,
  POST_COMMENT,
  FETCH_COMMENTS
} from "./types";
import axios from "axios";
import { reset } from "redux-form";
let config = {
  headers: {
    authorization: localStorage.getItem("token")
  }
};
export const createPost = (formValues, history) => {
  console.log(config);
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/post",
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
    const response = await axios.get(
      "https://morning-brook-29277.herokuapp.com/api/posts"
    );
    console.log(response);

    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};
export const fetchPost = id => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/fetch/post",
      {
        id
      }
    );

    dispatch({
      type: FETCH_POST,
      payload: response.data
    });
  };
};
export const fetchComments = _post => {
  return async function(dispatch) {
    console.log(_post);
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/fetch/comment",
      {
        _post: _post
      }
    );
    console.log(response);

    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data
    });
  };
};
export const postComment = ({ description }, _post, _responseUser) => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/post/comment",
      {
        _responseUser,
        _post,
        description
      },
      config
    );
    dispatch(reset("addcomment"));
    dispatch({
      type: FETCH_COMMENTS,
      payload: response.data
    });
  };
};
export const filterPosts = category => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/post/category",
      {
        category: category
      }
    );
    console.log(response);
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};

export const likeToggle = _id => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/post/like",
      {
        _id: _id
      },
      config
    );

    dispatch({
      type: FETCH_POST,
      payload: response.data.post
    });
  };
};
