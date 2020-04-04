import React, { Component } from "react";
import Navbar from "../../partials/Navbar";
import Footer from "../../partials/Footer";
import Sidebar from "../partials/Sidebar";
import MyLisitingBody from "./MyLisitingBody";

export default class MyListing extends Component {
  componentDidMount() {
    if (!sessionStorage.getItem("userDetails")) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="clearfix"></div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <Sidebar />
                  <MyLisitingBody />
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
