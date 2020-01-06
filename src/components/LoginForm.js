import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const LoginForm = props => {
  const [user, setUser] = useState({ username: "", password: "" });

  console.log(user);

  function handleChange(e) {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login/", user)
      .then(res => {
        console.log("Logged in!", res.data);
        localStorage.setItem("token", res.data.key);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error occured!: ", err.response);
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
