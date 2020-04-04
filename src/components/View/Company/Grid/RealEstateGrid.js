import React, { Component } from "react";

import RealEstateGridBody from "./RealEstateGridBody";
import Footer from "../../../partials/Footer";
import Navbar from "../../../partials/Navbar";
export default class RealEstateGrid extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RealEstateGridBody />
        <Footer />
      </div>
    );
  }
}
