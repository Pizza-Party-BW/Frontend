import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { signUp } from "../actions";

const SignUpForm = props => {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });
  const [{ signUpState }, dispatch] = useStateValue();

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Check to see if any of the inputs are empty
    if (!user.username || !user.password1 || !user.password2) {
      alert("Missing either username, password, or password confirmation.");
      return;
    }

    // Check to see if passwords match
    if (user.password1 !== user.password2) {
      alert("Passwords do not match.");
      return;
    }

    signUp(dispatch, user).then(res => {
      // Re-routes to Dashboard after successful registration
      if (res) {
        props.history.push("/dashboard");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="text" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input name="password1" type="password" onChange={handleChange} />
      </label>
      <label>
        Confirm Password:
        <input name="password2" type="password" onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
};

// Used the withRouter hook to pass history, location, match props from react-router-dom
export default withRouter(SignUpForm);
