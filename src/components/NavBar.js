import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { logout } from "../actions";

const NavBar = props => {
  const [loginState, dispatch] = useStateValue();
  let token = localStorage.getItem("token");
  console.log("PROPS", props, loginState);
  console.log("test");
  console.log(token);

  return (
    <div>
      {loginState && <div>Test</div>}
      <Link to="/" onClick={() => logout(dispatch)}>
        Logout
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
