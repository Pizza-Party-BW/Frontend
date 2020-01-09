import {
  loginReducer,
  signUpReducer,
  mapReducer,
  locationReducer
} from "./index";

export const rootReducer = (
  { loginState, signUpState, mapState, gameState },
  action
) => ({
  loginState: loginReducer(loginState, action),
  signUpState: signUpReducer(signUpState, action),
  mapState: mapReducer(mapState, action),
  gameState: locationReducer(gameState, action)
});
