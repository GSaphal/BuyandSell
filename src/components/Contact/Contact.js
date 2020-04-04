import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import ContactBody from "./ContactBody";
import Footer from "../partials/Footer";

export default class Contact extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <ContactBody />
        <Footer />
      </div>
    );
  }
}
