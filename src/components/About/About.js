import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import AboutView from "./AboutView";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="content" className="pt0 pb0">
          <AboutView />
        </div>
        <Footer />
      </div>
    );
  }
}
