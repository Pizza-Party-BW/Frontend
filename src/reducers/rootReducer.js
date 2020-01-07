import { loginReducer, signUpReducer } from "./index";

export const rootReducer = ({ loginState, signUpState }, action) => ({
  loginState: loginReducer(loginState, action),
  signUpState: signUpReducer(signUpState, action)
});
