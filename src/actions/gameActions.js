import { axiosAuth } from "../utils/axiosAuth";

export const GETTING_LOCATION = "GETTING_LOCATION";
export const LOCATION_SUCCESS = "LOCATION_SUCCESS";
export const LOCATION_ERROR = "LOCATION_ERROR";

export const getLocation = dispatch => {
  dispatch({ type: GETTING_LOCATION });
  axiosAuth()
    .get("https://lambda-mud-test.herokuapp.com/api/adv/init/")
    .then(res => {
      dispatch({ type: LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error occured!: ", err.response);
      dispatch({ type: LOCATION_ERROR, payload: err.response.data });
    });
};
