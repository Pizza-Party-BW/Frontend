import {
  GETTING_LOCATION,
  LOCATION_SUCCESS,
  LOCATION_ERROR,
  MOVING_PLAYER,
  MOVE_PLAYER_SUCCESS,
  MOVE_PLAYER_ERROR
} from "../actions";

/*
State shape:
  locationState: {
    isLoading: false,
    location: { uuid: "", name: "", title: "", description: "", players: [] },
    error: {}
  }
*/

export const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_LOCATION:
      return {
        ...state,
        isLoading: true
      };
    case LOCATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        location: payload
      };
    case LOCATION_ERROR:
      return {
        ...state,
        error: payload
      };
    case MOVING_PLAYER:
      return {
        ...state,
        isLoading: true
      };
    case MOVE_PLAYER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        location: { ...state.location, ...payload }
      };
    case MOVE_PLAYER_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
