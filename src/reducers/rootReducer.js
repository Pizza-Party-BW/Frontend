import {
  loginReducer,
  signUpReducer,
  mapReducer,
  locationReducer
} from "./index";

export const rootReducer = (
  { loginState, signUpState, mapState, locationState },
  action
) => ({
  loginState: loginReducer(loginState, action),
  signUpState: signUpReducer(signUpState, action),
  mapState: mapReducer(mapState, action),
  locationState: locationReducer(locationState, action)
});
