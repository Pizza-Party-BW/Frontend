import { GETTING_LOCATION, LOCATION_SUCCESS, LOCATION_ERROR } from "../actions";

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
    default:
      return state;
  }
};
