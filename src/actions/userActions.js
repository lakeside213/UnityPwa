import axios from "axios";
import { FETCH_PROFILE, BOOKMARK_POST, FETCH_USER } from "./types";
import { URL } from "../url";
import { addToast } from "./toastActions";
let config = {
  headers: {
    authorization: localStorage.getItem("token")
  }
};
export const fetchProfile = (id, feed) => {
  return async function(dispatch) {
    const response = await axios.post(`${URL}/api/profile`, {
      id,
      feed
    });

    dispatch({
      type: FETCH_PROFILE,
      payload: response.data
    });
  };
};

export const bookmarkPost = _post => {
  return async function(dispatch) {
    if (!config.authorization) {
      dispatch(addToast({ message: "Please sign-in first" }));
    } else {
      const response = await axios.post(
        `${URL}/api/user/bookmark`,
        {
          _post
        },
        config
      );

      dispatch({
        type: FETCH_USER,
        payload: response.data
      });
    }
  };
};
