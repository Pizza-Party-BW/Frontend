import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { logout } from "../actions";
import pizzaLogo from "../components/landing/assets/pizzaLogo.gif";

const NavBar = props => {
  const [{ loginState }, dispatch] = useStateValue();
  let token = localStorage.getItem("token");

  return (
    <StyledNav>
      <div className="logoHeader">
        <img src={pizzaLogo} className="logo" />
        <h1>Pizza Party</h1>
      </div>
      <div className="navLinks">
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
      </div>
    </StyledNav>
  );
};

export default withRouter(NavBar);

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

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

  .navLinks {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    height: 75px;
  }

  .logoHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 420px;
  }
`;
