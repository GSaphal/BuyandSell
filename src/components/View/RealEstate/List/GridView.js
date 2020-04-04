import React, { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default class GridView extends Component {
  render() {
    const items = this.props.data.map((key) => {
      return (
        <Fragment>
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
                    <div className="item-badge-left">Sponsored</div>
                    <div className="item-badge-right">For Sale</div>
                  </div>
                </a>
                <a href="/#" className="save-item">
                  <i className="fa fa-star" />
                </a>
              </div>
              <div className="item-info">
                <h3 className="item-title">3 bed semi-detached house</h3>
                <div className="item-location">
                  <i className="fa fa-map-marker" /> Kirkstone Road,
                  Middlesbrough TS3
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
        </Fragment>
      );
    });
    return (
      <div>
        {items.length ? (
          <div className="row">{items}</div>
        ) : (
          <div className="item">
            <div className="row">
              <div className="col-lg-12">
                <h5>No data found in the record.</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
