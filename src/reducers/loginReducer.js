import { IS_LOGGING_IN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions";

/*
State shape:
loginState: {
    isLoading: false,
    isLoggedIn: false,
    error: {},
}
*/

export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: {}
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
