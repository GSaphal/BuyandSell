import React, { Component } from "react";

import AddListingBody from "./AddListingBody";
import Navbar from "../../../partials/Navbar";
import Footer from "../../../partials/Footer";
import Sidebar from "../../partials/Sidebar";

export default class AddListing extends Component {
  componentDidMount() {
    if (!sessionStorage.getItem("userDetails")) {
      window.location.replace("/login");
    }
  }
  render() {
    return (
      <div id="main">
        <Navbar />
        <div className="clearfix"></div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <Sidebar />
                  <AddListingBody />
                </div>
              </div>
            </div>
          </div>
          >
          <Footer />
        </div>
      </div>
    );
  }
}
