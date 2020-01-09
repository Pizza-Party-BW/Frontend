import { IS_SIGNED_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "../actions";

/*
State shape:
signUpState: {
    isLoading: false,
    isSignedUp: false,
    error: {}
  }
*/

export const signUpReducer = (state, { type, payload }) => {
  switch (type) {
    case IS_SIGNED_UP:
      return {
        ...state,
        isLoading: true
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignedUp: true,
        error: {}
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
