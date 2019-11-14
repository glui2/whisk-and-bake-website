import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <AppBar position="static" className="navbar" color="primary">
        <Toolbar>
          <Button>ABOUT</Button>
          <Button>INSPIRATION</Button>
          <Button>ORDER</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
