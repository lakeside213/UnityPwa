import axios from "axios";
import { FETCH_PROFILE, BOOKMARK_POST, FETCH_USER } from "./types";
let config = {
  headers: {
    authorization: localStorage.getItem("token")
  }
};
export const fetchProfile = (id, feed) => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/profile",
      {
        id,
        feed
      }
    );

    dispatch({
      type: FETCH_PROFILE,
      payload: response.data
    });
  };
};

export const bookmarkPost = _post => {
  return async function(dispatch) {
    const response = await axios.post(
      "https://morning-brook-29277.herokuapp.com/api/user/bookmark",
      {
        _post
      },
      config
    );
    console.log(response);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
