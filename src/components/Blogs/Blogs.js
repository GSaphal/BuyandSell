import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import BlogsBody from "./BlogsBody";

export default class Blogs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BlogsBody />
        <Footer />
      </div>
    );
  }
}
