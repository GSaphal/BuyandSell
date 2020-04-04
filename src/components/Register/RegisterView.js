import React, { Component, Fragment } from "react";
import Axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import FacebookLoginView from "../partials/FacebookLoginView";
import GoogleLoginView from "../partials/GoogleLoginView";
class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errors: false,
      redirect: false,
      data: {
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
      }
    };
    this.validator = new SimpleReactValidator();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    const { data } = { ...this.state };
    const currentState = data;
    const { name, value } = event.target;
    currentState[name] = value;
    this.setState({ data: currentState });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    if (this.validator.allValid()) {
      const data = {
        name: this.state.data.name,
        address: this.state.data.address,
        password: this.state.data.password,
        phone: this.state.data.phone,
        email: this.state.data.email
      };
      Axios.post(process.env.REACT_APP_API + "register", data)
        .then(response => {
          this.setState({
            redirect: true,
            loading: false
          });
          this.props.history.push("/login");
        })
        .catch(error => {
          this.setState({ errors: true, loading: false });
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        loading: false
      });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-12 col-lg-10 col-xl-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    Register
                  </li>
                </ol>
              </nav>
              <div className="page-header">
                <h1>Please sign in or register</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="pt0 pb0">
          <div className="container">
            <div className="row justify-content-md-center align-items-center">
              <div className="col col-md-6  col-lg-5 col-xl-4">
                {this.state.errors ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    np{" "}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                ) : (
                  ""
                )}
                <ul className="nav nav-tabs tab-lg" role="tablist">
                  <li role="presentation" className="nav-item">
                    <Link to="/login" className="nav-link">
                      Sign In
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item">
                    <a className="nav-link active" href="/register">
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="login">
                    <form onSubmit={this.handleSubmit} method="POST">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={this.state.data.name}
                          onChange={this.handleChange}
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "name",
                            this.state.data.name,
                            "required|alpha_space"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={this.state.data.email}
                          onChange={this.handleChange}
                          className="form-control form-control-lg"
                          placeholder="Email"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "email",
                            this.state.data.email,
                            "required|email"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={this.state.data.password}
                          onChange={this.handleChange}
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "password",
                            this.state.data.password,
                            "required|min:8"
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="name">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={this.state.data.address}
                          onChange={this.handleChange}
                          className="form-control form-control-lg"
                          placeholder="Address"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "address",
                            this.state.data.address,
                            "required"
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Phone</label>
                        <input
                          type="number"
                          id="phone"
                          name="phone"
                          value={this.state.data.phone}
                          onChange={this.handleChange}
                          className="form-control form-control-lg"
                          placeholder="Phone"
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "phone",
                            this.state.data.phone,
                            "required|phone"
                          )}
                        </div>
                      </div>
                      {/* <div className="checkbox">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          required
                        />
                        <label htmlFor="terms">
                          By registering I accept our Terms of Use and Privacy.
                        </label>
                      </div> */}

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <i className="fa fa-refresh fa-spin px-2"></i>
                        )}
                        Register
                      </button>
                    </form>
                  </div>
                </div>
                <div> </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="social-login-buttons">
                  <FacebookLoginView />
                  <GoogleLoginView />
                  {/*  <a href="/#" className="btn btn-social btn-block btn-twitter">
                <i className="icon fa fa-twitter" /> Continue with Twitter
              </a>
              <a href="/#" className="btn btn-social btn-block btn-google">
                <i className="icon fa fa-google" /> Continue with Google
              </a>
              */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(RegisterView);
