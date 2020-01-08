import axios from "axios";

export const IS_SIGNED_UP = "IS_SIGNED_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export const LOGOUT = "LOGOUT";

export const signUp = (dispatch, user) => {
  dispatch({ type: IS_SIGNED_UP });

  // TODO: Change POST endpoint url
  return axios
    .post("https://pizza-party-bw.herokuapp.com/api/registration/", user)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS });
      // console.log("User successfully signed up! ", res.data);
      // Returns res.data ==> { key: String }

      // Sets the token into localStorage for private route calls
      localStorage.setItem("token", res.data.key);

      // Returns a value of true (after success), in order to trigger re-route
      return true;
    })
    .catch(err => {
      // console.log("Error occurred: ", err.response);
      dispatch({ type: SIGN_UP_ERROR, payload: err.response.data });
    });
};
