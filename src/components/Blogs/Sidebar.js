import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar" className="sidebar-right">
        <div className="sidebar_inner">
          <h3 className="subheadline">Categories</h3>
          <div className="list-group no-border">
            <a href="blog_category.html" className="list-group-item active">
              Real Estate
            </a>
            <a href="blog_category.html" className="list-group-item">
              Vechile
            </a>
            <a href="blog_category.html" className="list-group-item">
              Company
            </a>
            <a href="blog_category.html" className="list-group-item">
              Rent
            </a>
          </div>
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="Search" />
            <span className="input-group-btn">
              <button className="btn btn-white btn-lg" type="button">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
