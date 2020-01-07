import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { logout } from "../actions";

const NavBar = props => {
  const [{ loginState }, dispatch] = useStateValue();
  let token = localStorage.getItem("token");

  return (
    <div>
      {loginState.isLoggedIn ||
        (token && (
          <Link to="/" onClick={() => logout(dispatch)}>
            Logout
          </Link>
        ))}
    </div>
  );
};

export default withRouter(NavBar);
