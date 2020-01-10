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
      <LogoHeader>
        <Logo src={pizzaLogo} className="logo" />
        <NavHeader>Pizza Party</NavHeader>
      </LogoHeader>
      <NavLinksContainer>
        {props.location.pathname !== "/" && <Link to="/">Home</Link>}

        {props.location.pathname === "/" &&
          (loginState.isLoggedIn || token) && <Link to="/dashboard">Game</Link>}

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
      </NavLinksContainer>
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
  margin-bottom: 15px;

  a {
    font-size: ${({ theme }) => theme.mediumFont};
    color: ${({ theme }) => theme.primaryColor};
    font-family: ${({ theme }) => theme.secondaryFont};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const NavHeader = styled.h1`
  font-size: ${({ theme }) => theme.largeFont};
  font-family: "Press Start 2P";
  color: ${({ theme }) => theme.primaryColor};
`;

const NavLinksContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;
`;

const Logo = styled.img`
  height: 75px;
`;
