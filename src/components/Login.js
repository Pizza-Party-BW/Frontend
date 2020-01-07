import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginForm />
      <LoginMessage>
        Don't have an account yet? <Link to="/signup">Sign Up</Link>
      </LoginMessage>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  font-size: 2rem;
`;
const LoginTitle = styled.h2`
  text-align: center;
`;
const LoginMessage = styled.p`
  text-align: center;
`;
