import { axiosAuth } from "../utils/axiosAuth";

export const GETTING_LOCATION = "GETTING_LOCATION";
export const LOCATION_SUCCESS = "LOCATION_SUCCESS";
export const LOCATION_ERROR = "LOCATION_ERROR";
export const CHANGE_DIRECTION = "CHANGE_DIRECTION";

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
export const FOUND_PIZZA = "FOUND_PIZZA";
export const CLEAR_PIZZA = "CLEAR_PIZZA";

export const movePlayer = (dispatch, move) => {
  dispatch({ type: MOVING_PLAYER });
  axiosAuth()
    .post("/api/adv/move/", {
      direction: move
    })
    .then(res => {
      dispatch({ type: MOVE_PLAYER_SUCCESS, payload: res.data });
      if (move === "w") {
        dispatch({ type: CHANGE_DIRECTION, payload: "L" });
      }
      if (move === "e") {
        dispatch({ type: CHANGE_DIRECTION, payload: "R" });
      }

      if (
        (res.data.x === 1 && res.data.y === 1) ||
        (res.data.x === 6 && res.data.y === 0) ||
        (res.data.x === 6 && res.data.y === 9) ||
        (res.data.x === 2 && res.data.y === 7) ||
        (res.data.x === 3 && res.data.y === 5) ||
        (res.data.x === 6 && res.data.y === 5)
      ) {
        dispatch({
          type: FOUND_PIZZA,
          payload: "Oooo, found some pizza! *nom* *nom*"
        });
      } else {
        dispatch({ type: CLEAR_PIZZA });
      }
    })
    .catch(err => {
      dispatch({ type: MOVE_PLAYER_ERROR, payload: err.response.data });
      console.log(err.response.data);
    });
};
