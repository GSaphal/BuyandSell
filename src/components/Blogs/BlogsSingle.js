import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";
import BlogSingleBody from "./BlogSingleBody";

export default class BlogsSingle extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BlogSingleBody />
        <Footer />
      </div>
    );
  }
}
