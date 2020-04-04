import React, { Component } from "react";
export default class FeaturedCenter extends Component {
  render() {
    return (
      <div className="feature-box centered">
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row">
                  <div className="col-md-4">
                    <div className="content-box">
                      <div className="image">
                        <img src="img/demo/icons/1.png" width={100} alt="" />
                      </div>
                      <h4>Upload Your Property</h4>
                      <div className="caption">
                        Create your best-ever home with the latest trends in
                        renovating, decorating and more.
                      </div>
                      {/* <div className="button">
                        <a href="/#">FIND YOUR INSPIRATION</a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="content-box">
                      <div className="image">
                        <img src="img/demo/icons/2.png" width={100} alt="" />
                      </div>
                      <h4>Get the Customer</h4>
                      <div className="caption">
                        Thinking abroad? You can now dream and discover
                        international properties.
                      </div>
                      {/* <div className="button">
                        <a href="/#">CHOOSE A COUNTRY</a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="content-box">
                      <div className="image">
                        <img src="img/demo/icons/3.png" width={100} alt="" />
                      </div>
                      <h4>Huge Market</h4>
                      <div className="caption">
                        Understand your local market, learn how to get the best
                        price for your property and find agents in your area.
                      </div>
                      {/* <div className="button">
                        <a href="/#">EXPLORE NOW</a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
