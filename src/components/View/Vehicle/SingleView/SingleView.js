import React, { Component } from "react";
import SingleViewBody from "./SingleViewBody";
import SingleComment from "./SingleComment";
import Navbar from "../../../partials/Navbar";
import Footer from "../../../partials/Footer";
export default class SingleView extends Component {
  render() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    return (
      <div>
        <Navbar />
        <SingleViewBody id={this.props.match.params.id} />
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="socal-share-buttons">
                <h3 className="subheadline">Share this article on:</h3>
                <a
                  href={facebookUrl}
                  target="_blank"
                  className="btn btn-social btn-facebook"
                >
                  <i className="icon fa fa-facebook" /> Facebook
                </a>
                {/* <a href={goo className="btn btn-social btn-google">
                  <i className="icon fa fa-google" /> Google
                </a> */}
                <a
                  href={twitterUrl}
                  target="_blank"
                  className="btn btn-social btn-twitter"
                >
                  <i className="icon fa fa-twitter" /> Twitter
                </a>
              </div>
              <SingleComment id={this.props.match.params.id} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
