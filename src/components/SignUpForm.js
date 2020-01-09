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
  let signUpError = Object.values(signUpState.error);

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();

    signUp(dispatch, user).then(res => {
      // Re-routes to Dashboard after successful registration
      if (res) {
        props.history.push("/dashboard");
      }
    });
  };

  return (
    <>
      {signUpError.length > 0 && <ErrorMsg>ERROR: {signUpError[0]}</ErrorMsg>}
      <FormWrapper onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username:</FormLabel>
        <FormInput
          name="username"
          id="username"
          type="text"
          onChange={handleChange}
        />

        <FormLabel htmlFor="email">Email:</FormLabel>
        <FormInput
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
        />

        <FormLabel htmlFor="password1">Password:</FormLabel>
        <FormInput
          name="password1"
          id="password1"
          type="password"
          onChange={handleChange}
        />

        <FormLabel htmlFor="password2">Confirm Password:</FormLabel>
        <FormInput
          name="password2"
          id="password2"
          type="password"
          onChange={handleChange}
        />

        <FormButton>Submit</FormButton>
      </FormWrapper>
    </>
  );
};

// Used the withRouter hook to pass history, location, match props from react-router-dom
export default withRouter(SignUpForm);

export const FormWrapper = styled.form`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  padding: 4rem;
  margin: 30px 0;
  color: ${({ theme }) => theme.primaryColor};
`;

export const FormLabel = styled.label`
  margin-bottom: 0.2rem;
  font-family: "Press Start 2P";
  font-size: ${({ theme }) => theme.smallFont};
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  border-radius: 10px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 5px;
  outline: none;
`;

export const FormButton = styled.button`
  font-family: "Press Start 2P";
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.darkColor};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  height: 40px;
  border-radius: 15px;
  margin-top: 10px;

  :hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.darkColor};
    cursor: pointer;
  }
`;

export const ErrorMsg = styled.div`
  font-family: "Press Start 2P";
  font-size: ${({ theme }) => theme.tinyFont};
  color: red;
  padding-top: 15px;
`;
