import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpTitle>Sign-Up</SignUpTitle>
      <SignUpForm />
      <SignUpMessage>
        Already have an account? <Link to="/login">Login</Link>
      </SignUpMessage>
    </SignUpWrapper>
  );
};

export default SignUp;

const SignUpWrapper = styled.div`
  font-size: 2rem;
`;
const SignUpTitle = styled.h2`
  text-align: center;
`;
const SignUpMessage = styled.p`
  text-align: center;
`;
