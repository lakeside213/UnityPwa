export const fetchPost = id => {
  return async function(dispatch) {
    const response = await axios.post("http://localhost:8080/user", {
      id: id
    });

    dispatch({
      type: FETCH_POST,
      payload: response.data
    });
  };
};
