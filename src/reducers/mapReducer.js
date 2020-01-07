import { GETTING_MAP, MAP_SUCCESS, MAP_ERROR } from "../actions";

/*
State shape:
mapState: {
    isLoading: false,
    map: {},
    error: {},
}
*/

export const mapReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_MAP:
      return {
        ...state,
        isLoading: true
      };
    case MAP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        map: payload
      };
    case MAP_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
