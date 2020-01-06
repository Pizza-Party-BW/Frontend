import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const SignUpForm = props => {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
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

    // TODO: Change POST endpoint url
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", user)
      .then(res => {
        console.log("User successfully signed up! ", res.data);
        // Returns res.data ==> { key: String }

        // Sets the token into localStorage for private route calls
        localStorage.setItem("token", res.data.key);

        // Re-routes to Dashboard after successful registration
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error occurred: ", err.response);
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
