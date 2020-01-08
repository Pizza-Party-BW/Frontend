import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

// Styles
import { FormContainer, FormTitle, FormMessage } from "./SignUp";

const Login = () => {
  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>
      <LoginForm />
      <FormMessage>
        Don't have an account yet? <Link to="/signup">Sign Up</Link>
      </FormMessage>
    </FormContainer>
  );
};

export default Login;
