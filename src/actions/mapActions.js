import { axiosAuth } from "../utils/axiosAuth";

export const GETTING_MAP = "GETTING_MAP";
export const MAP_SUCCESS = "MAP_SUCCESS";
export const MAP_ERROR = "MAP_ERROR";

export const getMap = dispatch => {
  dispatch({ type: GETTING_MAP });
  axiosAuth()
    .get("/api/rooms/")
    .then(res => {
      dispatch({ type: MAP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error occured!: ", err.response);
      dispatch({ type: MAP_ERROR, payload: err.response.data });
    });
};
