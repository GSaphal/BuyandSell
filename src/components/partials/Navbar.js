import React, { Component, Fragment } from "react";
import Axios from "axios";
import { AddModal } from "./AddModal";
import { withRouter } from "react-router";

import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: "",
      realestatecategory: [],
      vehiclecategory: []
    };
    let token = sessionStorage.getItem("userDetails");
    Axios.defaults.headers.common["Accept"] = "application/json";
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    Axios.get(process.env.REACT_APP_API + "user")
      .then(response => {
        this.setState({
          username: response.data.name
        });
      })
      .catch(error => {});
    if (sessionStorage.getItem("userDetails")) {
      this.state.loggedIn = true;
    }
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API + "realestatecategory")
      .then(response => {
        this.setState({
          realestatecategory: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get(process.env.REACT_APP_API + "vehiclecategory")
      .then(response => {
        this.setState({
          vehiclecategory: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark" id="menu">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <span className="icon-uilove icon-uilove-realestate"></span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu-content"
              aria-controls="menu-content"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu-content">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Realestate
                  </a>
                  <div className="dropdown-menu">
                    {this.state.realestatecategory.map(category => {
                      return (
                        <Link
                          to={"/realestate/list/" + category.category_name}
                          className="dropdown-item"
                        >
                          {category.category_name}
                        </Link>
                      );
                    })}
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Vehicle
                  </a>
                  <div className="dropdown-menu">
                    {this.state.vehiclecategory.map(category => {
                      return (
                        <Link
                          to={"/vehicle/list/" + category.category_name}
                          className="dropdown-item"
                        >
                          {category.category_name}
                        </Link>
                      );
                    })}
                  </div>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/company/list">
                    Company
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>

                {/* <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li> */}
                {/* <li className="nav-item">
                <a className="nav-link" href="/#">
                  Job Vacancy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  FAQ
                </a>
              </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                {this.state.loggedIn ? (
                  <li className="nav-item dropdown user-account">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {this.state.username}
                    </a>
                    <div className="dropdown-menu">
                      <Link to="/user/my-listing" className="dropdown-item">
                        My Listing
                      </Link>
                      {/* <a href="/#" className="dropdown-item">
                      Change Password
                    </a>
                    <a href="/#" className="dropdown-item">
                      Notifications
                    </a>
                    <a href="my_membership.html" className="dropdown-item">
                      Membership
                    </a> */}
                      <a
                        onClick={function() {
                          sessionStorage.removeItem("userDetails");
                          window.location.replace("/");
                        }}
                        className="dropdown-item"
                      >
                        Logout
                      </a>
                    </div>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link nav-btn" to="/login">
                      Login / Register
                    </Link>
                  </li>
                )}
                {this.state.loggedIn ? (
                  <li className="nav-item">
                    <a
                      className="nav-link nav-btn"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      <span>
                        <i className="fa fa-plus" aria-hidden="true" /> Add
                        listing
                      </span>
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </nav>

        <AddModal />
      </Fragment>
    );
  }
}
export default withRouter(Navbar);
