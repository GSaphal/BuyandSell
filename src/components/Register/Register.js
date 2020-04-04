import React, { Component, Fragment } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import RegisterView from "./RegisterView";

export default class Register extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <RegisterView />
        <Footer />
      </Fragment>
    );
  }
}
