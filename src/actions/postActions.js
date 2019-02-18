import {
  CREATE_POST,
  FETCH_USER,
  FETCH_POST,
  FETCH_POSTS,
  POST_COMMENT,
  FETCH_COMMENTS
} from "./types";
import axios from "axios";
import { URL } from "../url";
import { reset } from "redux-form";
import { addToast } from "./toastActions";
let config = {
  headers: {
    authorization: localStorage.getItem("token")
  }
};
export const createPost = (formValues, history) => {
  console.log(config);
  return async function(dispatch) {
    const response = await axios.post(`${URL}/api/post`, formValues, config);

    history.push(`/app/topic/${response.data}`);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
export const fetchPosts = () => {
  return async function(dispatch) {
    const response = await axios.get(`${URL}/api/posts`);

    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};
export const fetchPost = id => {
  return async function(dispatch) {
    const response = await axios.post(`${URL}/api/fetch/post`, {
      id
    });

    dispatch({
      type: FETCH_POST,
      payload: response.data
    });
  };
};

export const postComment = ({ description }, _post, _responseUser) => {
  return async function(dispatch) {
    if (!config.authorization) {
      dispatch(addToast({ message: "Please sign-in first" }));
    } else {
      const response = await axios.post(
        `${URL}/api/post/comment`,
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
    }
  };
};
export const filterPosts = category => {
  return async function(dispatch) {
    const response = await axios.post(`${URL}/api/post/category`, {
      category: category
    });
    console.log(response);
    dispatch({
      type: FETCH_POSTS,
      payload: response.data
    });
  };
};

export const likeToggle = _id => {
  return async function(dispatch) {
    if (!config.authorization) {
      dispatch(addToast({ message: "Please sign-in first" }));
    } else {
      const response = await axios.post(
        `${URL}/api/post/like`,
        {
          _id: _id
        },
        config
      );

      dispatch({
        type: FETCH_POST,
        payload: response.data.post
      });
    }
  };
};
