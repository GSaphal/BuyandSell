import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Axios from "axios";
import { withRouter } from "react-router";

class FacebookLoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loading: false,
      redirect: false,
      access_token: "",
      username: ""
    };
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  responseFacebook = response => {
    this.setState({
      loading: true,
      access_token: response.accessToken,
      username: response.name
    });
    const data = {
      access_token: this.state.access_token,
      username: this.state.username
    };
    Axios.post(process.env.REACT_APP_API + "/facebook", data)
      .then(response => {
        this.setState({
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
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK}
        fields="name,email,picture"
        cssClass="btn btn-social btn-block btn-facebook"
        icon={
          this.state.loading
            ? "fa fa-refresh fa-spin px-2"
            : "icon fa fa-facebook"
        }
        callback={this.responseFacebook}
      />
    );
  }
}
export default withRouter(FacebookLoginView);
