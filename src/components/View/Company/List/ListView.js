import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default class ListView extends Component {
  render() {
    const items = this.props.data.map(key => {
      return (
        <div className="item" key={key.company_id}>
          <div className="row">
            <div className="col-lg-5">
              <div className="item-image">
                <Link to={"/company/view/" + key.company_id}>
                  <img
                    src={"https://buyandsellnepal.tech/images/" + key.photos}
                    className="img-fluid"
                  />
                  <div className="item-badges">
                    <div className="item-badge-right">{key.status}</div>
                  </div>
                  <div className="item-meta">
                    <div className="item-price">Rs.{key.company_price}</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="item-info">
                <h3 className="item-title">
                  <Link to={"/company/view/" + key.company_id}>
                    {key.company_title}
                  </Link>
                </h3>
                <div className="item-location">
                  <i className="fa fa-map-marker" /> {key.company_address},
                  {key.company_district}
                </div>
                <div className="item-details-i">
                  <span
                    className="bedrooms"
                    data-toggle="tooltip"
                    title={key.number_of_rooms + " Rooms"}
                  >
                    {" "}
                    {key.number_of_rooms}
                    <i className="fa fa-home px-2" />
                  </span>
                  <span
                    className="bathrooms"
                    data-toggle="tooltip"
                    title={key.salesperday + " Sales per day"}
                  >
                    {key.salesperday}
                    <i className="fa fa-money px-2" />
                  </span>
                </div>
                <div className="item-details">
                  <ul>
                    <li>
                      Room Rent<span>Rs. {key.rent_of_rooms}</span>
                    </li>

                    <li>
                      Type <span>Company</span>
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
