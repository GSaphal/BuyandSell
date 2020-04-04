import React, { Component } from "react";
import Navbar from "../partials/Navbar";
import HomeSearch from "./HomeSearch";
import Featured from "./Featured";
import FeaturedCenter from "./FeaturedCenter";
import News from "./News";
import Clients from "./Clients";
import Connect from "./Connect";
import Footer from "../partials/Footer";

class Home extends Component {
  render() {
    return (
      <div id="main">
        <Navbar />
        <HomeSearch />
        <div id="content" className="pt0 pb0">
          <Featured />
          <FeaturedCenter />
          {/* <Clients /> */}
          {/* <News /> */}
          <Connect />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
