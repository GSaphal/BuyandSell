import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default class ListView extends Component {
  render() {
    const items = this.props.data.map(key => {
      return (
        <div className="item" key={key.vehicle_id}>
          <div className="row">
            <div className="col-lg-5">
              <div className="item-image">
                <Link to={"/vehicle/list/" + key.vehicle_id}>
                  <img
                    src={"https://buyandsellnepal.tech/images/" + key.photos}
                    className="img-fluid"
                  />
                  <div className="item-badges">
                    <div className="item-badge-right">
                      {key.vehicle_category}
                    </div>
                  </div>
                  <div className="item-meta">
                    <div className="item-price">Rs.{key.vehicle_price}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="item-info">
                <h3 className="item-title">
                  <Link to={"/vehicle/view/" + key.vehicle_id}>
                    {key.vehicle_title}
                  </Link>
                </h3>
                <div className="item-location">
                  <i className="fa fa-map-marker" /> {key.vehicle_address},
                  {key.vehicle_district}
                </div>
                <div className="item-details-i">
                  <span
                    className="bedrooms"
                    data-toggle="tooltip"
                    title="Fuel Type"
                  >
                    {key.fuel_type}
                    <i className="fa fa-tachometer px-2" />
                  </span>
                  <span
                    className="bathrooms"
                    data-toggle="tooltip"
                    title="Condition"
                  >
                    {key.condition}
                    <i className="fa fa-exclamation-circle px-2" />
                  </span>
                </div>
                <div className="item-details">
                  <ul>
                    <li>
                      Company <span>{key.company_name}</span>
                    </li>

                    <li>
                      Type <span>Vehicle</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="added-on">
                    Listed on:
                    <Moment format="YYYY/MM/DD">{key.listed_on}</Moment>
                  </div>
                </div>
                <div className="col-md-6">
                  <a href="/#" className="added-by"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {items.length ? (
          items
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
