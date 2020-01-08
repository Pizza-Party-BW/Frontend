import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { signUp } from "../actions";
import styled from "styled-components";

const SignUpForm = props => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });
  const [{ signUpState }, dispatch] = useStateValue();

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Check to see if any of the inputs are empty
    if (!user.username || !user.password1 || !user.password2) {
      alert("Missing either username, password, or password confirmation.");
      return;
    }

    // Check to see if passwords match
    if (user.password1 !== user.password2) {
      alert("Passwords do not match.");
      return;
    }

    signUp(dispatch, user).then(res => {
      // Re-routes to Dashboard after successful registration
      if (res) {
        props.history.push("/dashboard");
      }
    });
  };

  return (
    <SignUpFormWrapper onSubmit={handleSubmit}>
      <SignUpLabel htmlFor="username">Username:</SignUpLabel>
      <SignUpInput
        name="username"
        id="username"
        type="text"
        onChange={handleChange}
      />

      <SignUpLabel htmlFor="email">Email:</SignUpLabel>
      <SignUpInput
        name="email"
        id="email"
        type="email"
        onChange={handleChange}
      />

      <SignUpLabel htmlFor="password1">Password:</SignUpLabel>
      <SignUpInput
        name="password1"
        id="password1"
        type="password"
        onChange={handleChange}
      />

      <SignUpLabel htmlFor="password2">Confirm Password:</SignUpLabel>
      <SignUpInput
        name="password2"
        id="password2"
        type="password"
        onChange={handleChange}
      />

      <button>Submit</button>
    </SignUpFormWrapper>
  );
};

// Used the withRouter hook to pass history, location, match props from react-router-dom
export default withRouter(SignUpForm);

const SignUpFormWrapper = styled.form`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  padding: 4rem;
  margin: 2rem 0;
`;

const SignUpLabel = styled.label`
  margin-bottom: 0.2rem;
`;

const SignUpInput = styled.input`
  margin-bottom: 1rem;
`;
