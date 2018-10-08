import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./views/Home";
import Couriers from "./views/Couriers";
import CourierView from "./views/CourierView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/couriers" component={Couriers} />
        <Route exact path="/couriers/:id" component={CourierView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
