import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import logo from "../images/Whisk_and_bake_logo.jpeg";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo}></img>
        <AppBar position="static" className="navbar" color="primary">
          <Toolbar>
            <Button>ABOUT</Button>
            <Button>INSPIRATION</Button>
            <Button>ORDER</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
