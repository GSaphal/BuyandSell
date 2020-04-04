import React, { Component, Fragment } from "react";
import SimpleReactValidator from "simple-react-validator";
import Axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import FacebookLoginView from "../partials/FacebookLoginView";
import GoogleLoginView from "../partials/GoogleLoginView";
import { SuccessToast, ToastMessage } from "../utilities/SuccessToast";
class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      redirect: false,
      data: {
        email: "",
        password: ""
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
    if (this.validator.allValid()) {
      this.setState({
        loading: true
      });
      const data = {
        password: this.state.data.password,
        email: this.state.data.email
      };
      event.preventDefault();
      Axios.defaults.headers.common["Accept"] = "application/json";
      Axios.post(process.env.REACT_APP_API + "login", data)
        .then(response => {
          console.log(response);
          sessionStorage.setItem(
            "userDetails",
            response.data.token.access_token
          );
          this.setState({
            redirect: true,
            loading: false
          });
          if (response.status) {
            this.props.history.push("/");
          }
        })
        .catch(error => {
          console.log(error);
          this.setState({ error: true });
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <Fragment>
        <div className="container mb-5">
          <div className="row justify-content-md-center">
            <div className="col col-md-12 col-lg-10 col-xl-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
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
                {this.state.error ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    Incorrect Email or Password
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
                    <Link className="nav-link active" to="/login">
                      Sign In
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="login">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={this.state.data.email}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="text-danger pb-2">
                        {this.validator.message(
                          "email",
                          this.state.data.email,
                          "required|email"
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          name="password"
                          value={this.state.data.password}
                          onChange={this.handleChange}
                        />
                        <div class="text-danger pb-2">
                          {this.validator.message(
                            "password",
                            this.state.data.password,
                            "required"
                          )}
                        </div>
                      </div>
                      {/* <p className="text-lg-right">
                    <a href="forgot-password.html">Forgot Password</a>
                  </p> */}
                      <div className="checkbox">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember Me</label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <i className="fa fa-refresh fa-spin px-2"></i>
                        )}
                        Sign In
                      </button>
                    </form>
                    {/* <ToastContainer /> */}
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
export default withRouter(LoginView);
