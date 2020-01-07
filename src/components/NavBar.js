import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { logout } from "../actions";

const NavBar = props => {
  const [{ loginState }, dispatch] = useStateValue();
  let token = localStorage.getItem("token");
  console.log(props.location.pathname);

  return (
    <div>
      {props.location.pathname === "/dashboard" && <Link to="/">Home</Link>}

      {props.location.pathname === "/" && loginState.isLoggedIn && (
        <Link to="/dashboard">Game</Link>
      )}

      {loginState.isLoggedIn || token ? (
        <Link to="/" onClick={() => logout(dispatch)}>
          Logout
        </Link>
      ) : (
        <Link to="/login">Login</Link>
      )}

      {(!loginState.isLoggedIn || !token) && <Link to="/signup">Sign Up</Link>}
    </div>
  );
};

export default withRouter(NavBar);
