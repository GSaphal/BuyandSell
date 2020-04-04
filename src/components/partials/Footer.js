import React, { Component } from "react";
import { scrollToTop } from "../../index";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-circle"
          id="to-top"
          onClick={scrollToTop}
        >
          <i className="fa fa-angle-up" />
        </button>
        <footer
          id="footer"
          className="footer"
          className="bg-light footer-light"
        >
          <div className="container container-1000">
            <div className="row">
              <div className="col-lg-3">
                <p>
                  <span className="icon-uilove icon-uilove-realestate" />
                </p>
                <address className="mb-3">
                  <strong>Buy and Sell Nepal</strong>
                  <br />
                  FreakStreet, Basantpaur
                  <br />
                  Kathmandu, Nepal
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                {/* <div className="footer-social mb-4">
                  <a href="/#" className="ml-2 mr-2">
                    <span className="fa fa-twitter" />
                  </a>
                  <a href="/#" className="ml-2 mr-2">
                    <span className="fa fa-facebook" />
                  </a>
                  <a href="/#" className="ml-2 mr-2">
                    <span className="fa fa-instagram" />
                  </a>
                </div> */}
              </div>
              <div className="col-lg-2 col-sm-4">
                <div className="footer-links">
                  <ul className="list-unstyled">
                    <li className="list-title">
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/single-view">Listing</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>

                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div className="footer-links">
                  <ul className="list-unstyled">
                    <li className="list-title">
                      <a href="/#">Links</a>
                    </li>
                    <li>
                      <a href="/#">For Rent</a>
                    </li>
                    <li>
                      <a href="/#">For Sale</a>
                    </li>
                    <li>
                      <a href="/#">Commercial</a>
                    </li>
                    <li>
                      <a href="/#">Agents</a>
                    </li>
                    <li>
                      <a href="/#">Property Guides</a>
                    </li>
                    <li>
                      <a href="/#">Jobs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div className="footer-links">
                  <ul className="list-unstyled">
                    <li className="list-title">
                      <a href="/#">Help</a>
                    </li>

                    <li>
                      <a href="/#">FAQ</a>
                    </li>
                    <li>
                      <a href="/#">Report</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-lg-right ml-lg-2">
                  {/* <form>
                    <div className="list-title">Subscribe</div>
                    <div className="input-group input-group-lg">
                      <input
                        type="text"
                        name="email"
                        className="form-control form-control-lg subscribe-input"
                        placeholder="Email"
                      />
                      <div className="input-group-append ml-0">
                        <button className="btn subscribe-button" type="button">
                          <i className="fa fa-envelope" />
                        </button>
                      </div>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
            <div className="footer-credits d-lg-flex justify-content-lg-between align-items-center">
              <div>© 2020 Theme. All Rights Reserved</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
