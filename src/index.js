import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "./index.css";

const whiskTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffb9a6"
    },
    secondary: {
      main: "#ffb340"
    }
  },
  typography: {
    fontFamily: "Raleway, Sans Serif"
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={whiskTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
