import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import Axios from "axios";
import { withRouter } from "react-router";
class GoogleLoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: false,
      redirect: false,
      access_token: "",
      username: ""
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }
  responseGoogle = response => {
    console.log(response);
    this.setState({
      loading: true,
      access_token: response.uc.access_token,
      username: response.profileObj.name
    });
    const data = {
      access_token: this.state.access_token,
      username: this.state.username
    };
    Axios.post(process.env.REACT_APP_API + "google", data)
      .then(response => {
        this.setState({
          loading: false,
          redirect: true
        });
        sessionStorage.setItem("userDetails", response.data.token.access_token);
        this.props.history.push("/");
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="btn btn-social btn-block btn-google"
            >
              <i
                class={
                  this.state.loading
                    ? "fa fa-refresh fa-spin px-2"
                    : "icon fa fa-google"
                }
              ></i>
              Login with Google
            </button>
          )}
          onSuccess={this.responseGoogle}
          cssClass="loginBtn loginBtn--google"
          onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}
export default withRouter(GoogleLoginView);
