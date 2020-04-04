import React, { Component, Fragment } from "react";
import Axios from "axios";
export default class AboutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: []
    };
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API + "aboutus")
      .then(response => {
        console.log(response.data);
        this.setState({
          about: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const aboutList = this.state.about.map(about => {
      return (
        <Fragment>
          <h4 className="title">{about.aboutus_heading}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: about.aboutus_description
            }}
          ></div>
        </Fragment>
      );
    });
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-12 col-xl-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="/about">About</a>
                </li>
              </ol>
            </nav>
            <div className="page-header v2 bordered">
              <h1>
                About Us <small>Know about us</small>
                {aboutList}
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
