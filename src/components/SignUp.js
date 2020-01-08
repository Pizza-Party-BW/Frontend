import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";

const SignUp = () => {
  return (
    <FormContainer>
      <FormTitle>Sign-Up</FormTitle>
      <SignUpForm />
      <FormMessage>
        Already have an account? <Link to="/login">Login</Link>
      </FormMessage>
    </FormContainer>
  );
};

export default SignUp;

export const FormContainer = styled.div`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.smallFont};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormTitle = styled.h2`
  font-family: "Press Start 2P";
  font-size: ${({ theme }) => theme.mediumFont};
  text-align: center;
`;
export const FormMessage = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  text-align: center;

  a {
    color: ${({ theme }) => theme.primaryColor};
    padding: 3px 10px;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 5px;
  }

  a:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.darkColor};
  }
`;
