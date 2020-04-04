import React, { Component, Fragment } from "react";
import LoginView from "./LoginView";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <LoginView />
        <Footer />
      </Fragment>
    );
  }
}
