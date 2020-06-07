import React, { Component } from "react";
import AboutPage from "./components/AboutPage";
import InspirationPage from "./components/InspirationPage";
import OrderPage from "./components/OrderPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/inspiration">
              <InspirationPage />
            </Route>
            <Route path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
