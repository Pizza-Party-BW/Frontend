import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as reset from "./styles/reset.css";
import * as global from "./styles/global.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
