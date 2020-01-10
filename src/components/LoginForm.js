import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { login } from "../actions";

// Styles
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMsg
} from "./SignUpForm";

const LoginForm = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [{ loginState }, dispatch] = useStateValue();
  let loginError = loginState.error.non_field_errors;

  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(dispatch, user).then(res => {
      if (res) {
        props.history.push("/dashboard");
      }
    });
  }

  return (
    <>
      {loginError && <ErrorMsg>ERROR: {loginError}</ErrorMsg>}
      <FormWrapper onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <FormInput
          type="text"
          name="username"
          required
          value={user.username}
          onChange={handleChange}
        />
        <FormLabel htmlFor="password">Password:</FormLabel>
        <FormInput
          type="password"
          name="password"
          required
          value={user.password}
          onChange={handleChange}
        />
        <FormButton>Login</FormButton>
      </FormWrapper>
    </>
  );
};

export default withRouter(LoginForm);
