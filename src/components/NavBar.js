import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { logout } from "../actions";

const NavBar = props => {
  const [{ loginState }, dispatch] = useStateValue();
  let token = localStorage.getItem("token");

  return (
    <StyledNav>
      <h1>Pizza Party</h1>
      {props.location.pathname !== "/" && <Link to="/">Home</Link>}

      {props.location.pathname === "/" && loginState.isLoggedIn && (
        <Link to="/dashboard">Game</Link>
      )}

      {(loginState.isLoggedIn || token) && (
        <Link to="/" onClick={() => logout(dispatch)}>
          Logout
        </Link>
      )}

      {props.location.pathname !== "/login" && !token && (
        <Link to="/login">Login</Link>
      )}

      {props.location.pathname !== "/signup" && !token && (
        <Link to="/signup">Sign Up</Link>
      )}
    </StyledNav>
  );
};

export default withRouter(NavBar);

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  h1 {
    font-size: ${({ theme }) => theme.largeFont};
    font-family: "Press Start 2P";
    color: ${({ theme }) => theme.primaryColor};
  }

  a {
    font-size: ${({ theme }) => theme.mediumFont};
    color: ${({ theme }) => theme.primaryColor};
    font-family: ${({ theme }) => theme.secondaryFont};
    text-decoration: none;
  }
`;
