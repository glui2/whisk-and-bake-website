import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { CardMedia, Toolbar } from "@material-ui/core";
import logo from "../images/wnb_logo_crop.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="wnb-header-logo">
          <img width="200px" src={logo}></img>
        </div>
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
