import React, { Component } from "react";
// import Sidebar from "../../Sidebar";

export default class RealEstateGridBody extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="search-form">
            <div className="card">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="form-group">
                        <select
                          className="form-control form-control-lg ui-select"
                          data-placeholder="Property Type"
                        >
                          <option value="property">Property</option>
                          <option value="company">Company</option>
                          <option value="vechiles">Vechiles</option>
                          <option value="rent">Rent</option>
                          <option value="jobcompany">Job Company</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/real-estate/grid">Real Estate</a>
                  </li>
                </ol>
              </nav>
              <div className="page-header">
                <h1>Real Estate Grid View</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="content" className="pt0 pb0">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  {/* <Sidebar /> */}
                  <div className="col-md-8 col-lg-9">
                    <div className="sorting">
                      <div className="row justify-content-between">
                        <div className="col-sm-5 col-md-5 col-lg-4 col-xl-3">
                          <div className="form-group">
                            <select className="form-control ui-select">
                              <option selected="selected">Most recent</option>
                              <option>Highest price</option>
                              <option>Lowest price</option>
                              <option>Most reduced</option>
                              <option>Most popular</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                          <div className="btn-group float-right" role="group">
                            <a
                              href="/real-estate/grid"
                              className="btn btn-light"
                            >
                              <i className="fa fa-th" />
                            </a>
                            <a
                              href="/real-estate/list"
                              className="btn btn-light active"
                            >
                              <i className="fa fa-bars" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="item-listing grid">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/1.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/2.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/3.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/4.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/5.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/6.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/7.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="item">
                            <div className="item-image">
                              <a href="/single-view">
                                <img
                                  src="img/demo/property/8.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <div className="item-meta">
                                  <div className="item-price">
                                    $420,000 <small>$777 / sq m</small>
                                  </div>
                                </div>
                                <div className="item-badges">
                                  <div className="item-badge-left">
                                    Sponsored
                                  </div>
                                  <div className="item-badge-right">
                                    For Sale
                                  </div>
                                </div>
                              </a>
                              <a href="/#" className="save-item">
                                <i className="fa fa-star" />
                              </a>
                            </div>
                            <div className="item-info">
                              <h3 className="item-title">
                                3 bed semi-detached house
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
                              </div>
                              <div className="item-details-i">
                                <span
                                  className="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i className="fa fa-bed" />
                                </span>
                                <span
                                  className="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i className="fa fa-bath" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            «
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            »
                          </a>
                        </li>
                      </ul>
                    </nav>
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
