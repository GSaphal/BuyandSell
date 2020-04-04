import React, { Component } from "react";

export default class Clients extends Component {
  render() {
    return (
      <div className="feature-box centered">
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="main-title">
                  <span>What our clients say</span>
                </div>
                <div className="swiper-container testimonials">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item content-box centered">
                        <div className="image">
                          <img
                            className="rounded-circle"
                            src="img/demo/profile.jpg"
                            width={180}
                            alt=""
                          />
                        </div>
                        <h4>
                          Thank you for your quick and clear responses. They are
                          much appreciated. This was a site that needed to go up
                          fast and it has – customizations and all!
                        </h4>
                        <div className="caption">The Brown Family</div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item content-box centered">
                        <div className="image">
                          <img
                            className="rounded-circle"
                            src="img/demo/profile2.jpg"
                            width={180}
                            alt=""
                          />
                          <h4>
                            Thank you for your quick and clear responses. They
                            are much appreciated. This was a site that needed to
                            go up fast and it has – customizations and all!
                          </h4>
                          <div className="caption">The Brown Family</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item content-box centered">
                        <div className="image">
                          <img
                            className="rounded-circle"
                            src="img/demo/profile3.jpg"
                            width={180}
                            alt=""
                          />
                          <h4>
                            Thank you for your quick and clear responses. They
                            are much appreciated. This was a site that needed to
                            go up fast and it has – customizations and all!
                          </h4>
                          <div className="caption">The Brown Family</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add Arrows */}
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
