import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div className="feature-box gray centered">
        <div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="main-title">
                  <span>News &amp; Updates </span>
                </div>
                <div className="main-title-description">
                  Stay up to date with the latest happenings.
                </div>
                <div className="item-listing grid mb50">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="item">
                        <div className="item-image">
                          <a href="/blogs-single">
                            <img
                              src="img/demo/property/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="item-meta">
                              <div className="item-price">
                                <small>26th Oct 17</small>
                              </div>
                            </div>
                            <div className="item-badges">
                              <div className="item-badge-right">Legal</div>
                            </div>
                          </a>
                        </div>
                        <div className="item-info">
                          <h3 className="item-title">
                            Allianz invests 100m in Hines European Value Fund
                          </h3>
                          <div className="item-comments-count">
                            <i className="fa fa-comment-o" /> 3
                          </div>
                          <div className="item-author">By John Doe</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="item-image">
                          <a href="/blogs-single">
                            <img
                              src="img/demo/property/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="item-meta">
                              <div className="item-price">
                                <small>26th Oct 17</small>
                              </div>
                            </div>
                            <div className="item-badges">
                              <div className="item-badge-right">
                                Development
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="item-info">
                          <h3 className="item-title">
                            Skanska signs 43.2m construction deal in Sollentuna
                          </h3>
                          <div className="item-comments-count">
                            <i className="fa fa-comment-o" /> 3
                          </div>
                          <div className="item-author">By John Doe</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="item-image">
                          <a href="/blogs-single">
                            <img
                              src="img/demo/property/1.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="item-meta">
                              <div className="item-price">
                                <small>26th Oct 17</small>
                              </div>
                            </div>
                            <div className="item-badges">
                              <div className="item-badge-right category">
                                Finance
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="item-info">
                          <h3 className="item-title">
                            Baltic Horizon Fund plans next public offering of
                            new units
                          </h3>
                          <div className="item-comments-count">
                            <i className="fa fa-comment-o" /> 3
                          </div>
                          <div className="item-author">By John Doe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a href="/blogs" className="btn btn-xlg btn-link">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
