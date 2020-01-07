import { loginReducer } from "./index";

export const rootReducer = (login, action) => ({
  login: loginReducer(login, action)
});
