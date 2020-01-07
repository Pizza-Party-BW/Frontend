import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import * as reset from "./styles/reset.css";
import * as global from "./styles/global.css";

import "./index.css";

import App from "./App";

const GlobalStyle = createGlobalStyle`${reset} ${global}`;

const theme = {
  tinyFont: "1.2rem",
  smallFont: "1.8rem",
  mediumFont: "2.4rem",
  largeFont: "3.0rem",
  hugeFont: "4.0rem",
  primaryColor: "#9DD456",
  headerFont: "Press Start 2P",
  secondaryFont: "Play, sans-serif"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);
