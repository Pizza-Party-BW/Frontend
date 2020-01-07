import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { login } from "../actions";
import styled from "styled-components";

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
      {loginError && <div>ERROR: {loginError}</div>}
      <LoginFormWrapper onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          name="username"
          required
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <LoginInput
          type="password"
          name="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </LoginFormWrapper>
    </>
  );
};

export default withRouter(LoginForm);

const LoginFormWrapper = styled.form`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  padding: 4rem;
  margin: 2rem 0;
`;

const LoginInput = styled.input`
  margin-bottom: 1rem;
`;
