import { axiosAuth } from "../utils/axiosAuth";

export const GETTING_LOCATION = "GETTING_LOCATION";
export const LOCATION_SUCCESS = "LOCATION_SUCCESS";
export const LOCATION_ERROR = "LOCATION_ERROR";

export const getLocation = dispatch => {
  dispatch({ type: GETTING_LOCATION });
  axiosAuth()
    .get("/api/adv/init")
    .then(res => {
      dispatch({ type: LOCATION_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error occured!: ", err.response);
      dispatch({ type: LOCATION_ERROR, payload: err.response.data });
    });
};

export const MOVING_PLAYER = "MOVING_PLAYER";
export const MOVE_PLAYER_SUCCESS = "MOVE_PLAYER_SUCCESS";
export const MOVE_PLAYER_ERROR = "MOVE_PLAYER_ERROR";

export const movePlayer = (dispatch, move) => {
  dispatch({ type: MOVING_PLAYER });
  axiosAuth()
    .post("/api/adv/move/", {
      direction: move
    })
    .then(res => {
      dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({ type: MOVE_PLAYER_ERROR, payload: err.response.data });
      console.log(err.response.data);
    });
};
