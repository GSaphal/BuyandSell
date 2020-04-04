import React, { Component } from "react";

export default class Connect extends Component {
  render() {
    return (
      <div className="feature-box centered pb0">
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-10 col-xl-10">
                <div className="row">
                  <div className="col-md-6">
                    <div className="text-center mt50 mb50">
                      <div className="main-title">
                        <span>Connect with us from anywhere</span>
                      </div>
                      <div className="main-title-description">
                        Download the mobile app and enjoy the smoothest
                        experience
                      </div>
                      <img src="img/store/apple.svg" width={120} alt="" />
                      <img src="img/store/google.svg" width={120} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="img/demo/mobile-app-hero.png"
                      className="img-fluid"
                      alt=""
                    />
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
