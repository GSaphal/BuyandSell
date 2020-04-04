import React, { Component } from "react";
import Axios from "axios";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
export default class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    Axios.get(process.env.REACT_APP_API + "realestates/featured")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const swiperParams = {
      slidesPerView: 2,
      centeredSlides: false,
      effect: "slide",
      loop: true,
      spaceBetween: 40,
      shouldSwiperUpdate: true,
      rebuildOnUpdate: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      breakpoints: {
        // when window width is <= 640px
        0: {
          slidesPerView: 1
        },
        385: {
          slidesPerView: 2
        },
        628: {
          slidesPerView: 3
        },
        850: {
          slidesPerView: 4
        },
        1300: {
          slidesPerView: 5
        }
      }
    };

    return (
      <div className="feature-box centered gray">
        <div>
          <div className="container-fluid">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="main-title">
                  <span>Featured Properties</span>
                </div>
                <div className="main-title-description">
                  We give best value for your property.
                </div>
                <div className="clearfix" />
                <div className="mt50 mb50">
                  <div className="featured-gallery v2 item-listing grid">
                    <div className="row">
                      <Swiper {...swiperParams} shouldSwiperUpdate>
                        {this.state.data.map(data => {
                          const backgroundImage =
                            "https://buyandsellnepal.tech/images/" +
                            data.photos;
                          return (
                            <div>
                              <div className="item ">
                                <Link to={"/realestate/view/" + data.id}>
                                  <div className="item-image">
                                    <div>
                                      <img
                                        className="img-fluid"
                                        src={backgroundImage}
                                        style={{ height: "300px" }}
                                      ></img>
                                    </div>

                                    <div className="item-meta">
                                      <div className="item-info">
                                        <h3 className="item-title">
                                          {data.property_name}
                                        </h3>
                                        <div className="item-location">
                                          <i className="fa fa-map-marker" />
                                          {(data.address, " ", data.district)}
                                        </div>
                                      </div>
                                      <div className="item-price">
                                        Rs. {data.property_price}
                                      </div>
                                    </div>
                                    <div className="item-badges">
                                      <div className="item-badge-right sponsored-badge ">
                                        Sponsored
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              {/* <img
                                className="img-fluid featured-slider"
                                style={{ height: 300, height: 300 }}
                                src={
                                  "https://buyandsellnepal.tech/images/" +
                                  data.photos
                                }
                              /> */}
                              {/* <div className="featured-display">
                                <div className="badge badge-success p-2">
                                  <div className="item-badge-right">
                                    Sponsored
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          );
                        })}
                      </Swiper>
                      {/* <div className="col-md-6">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="item item-md">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/2.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="item item-sm">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/3.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="item item-sm">
                              <div
                                className="item-image"
                                style={{
                                  backgroundImage:
                                    "url(img/demo/property/4.jpg)"
                                }}
                              >
                                <a href="/single-view">
                                  <div className="item-meta">
                                    <div className="item-info">
                                      <h3 className="item-title">
                                        3 bed semi-detached house
                                      </h3>
                                      <div className="item-location">
                                        <i className="fa fa-map-marker" />
                                        Kirkstone Road, Middlesbrough TS3
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      $420,000 <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                  <div className="item-badges">
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <div className="text-center">
                  <a href="/list-view" className="btn btn-xlg btn-link">
                    Explore More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
