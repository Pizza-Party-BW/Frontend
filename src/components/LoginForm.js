import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { login } from "../actions";

const LoginForm = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loginState, dispatch] = useStateValue();

  console.log(user);
  console.log(login);

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default withRouter(LoginForm);
