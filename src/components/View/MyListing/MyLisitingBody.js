import React, { Component, Fragment } from "react";
import Axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default class MyLisitingBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realestate: [],
      company: [],
      vehicle: []
    };
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API + "mylisting")
      .then(response => {
        console.log(response);
        this.setState({
          realestate: response.data.realestate,
          company: response.data.company,
          vehicle: response.data.vehicle
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="col-md-7 col-lg-8 col-xl-8">
        <div className="page-header bordered">
          <h1>My Listings</h1>
        </div>
        <div className="item-listing list">
          {this.state.realestate.map(key => {
            return (
              <Fragment>
                <div className="item" key={key.realestate_id}>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="item-image">
                        <Link to={"/realestate/view/" + key.realestate_id}>
                          <img
                            src={
                              "https://buyandsellnepal.tech/images/" +
                              key.photos
                            }
                            className="img-fluid"
                          />
                          <div className="item-badges">
                            <div className="item-badge-right">
                              For {key.status}
                            </div>
                          </div>
                          <div className="item-meta">
                            <div className="item-price">Rs.{key.price}</div>
                          </div>
                        </Link>
                      </div>
                      <Link
                        to={"/realestate/edit/" + key.realestate_id}
                        className="remove-item"
                      >
                        <i className="fa fa-edit" /> Edit Listing
                      </Link>{" "}
                    </div>
                    <div className="col-lg-7">
                      <div className="item-info">
                        <h3 className="item-title">
                          <Link to={"/realestate/view/" + key.realestate_id}>
                            {key.property_name}
                          </Link>
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" /> {key.location},
                          {key.district}
                        </div>
                        <div className="item-details-i">
                          <span
                            className="bedrooms"
                            data-toggle="tooltip"
                            title="3 Bedrooms"
                          >
                            {key.number_of_bedrooms}
                            <i className="fa fa-bed px-2" />
                          </span>
                          <span
                            className="bathrooms"
                            data-toggle="tooltip"
                            title="2 Bathrooms"
                          >
                            {key.number_of_bathrooms}
                            <i className="fa fa-bath px-2" />
                          </span>
                        </div>
                        <div className="item-details">
                          <ul>
                            <li>
                              Sq Ft <span>{key.property_area}</span>
                            </li>
                            <li>
                              Type <span>Realstate</span>
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
              </Fragment>
            );
          })}
          {this.state.vehicle.map(key => {
            return (
              <Fragment>
                <div className="item" key={key.vehicles_id}>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="item-image">
                        <Link to={"/vehicle/view/" + key.vehicle_id}>
                          <img
                            src={
                              "https://buyandsellnepal.tech/images/" +
                              key.photos
                            }
                            className="img-fluid"
                          />
                          <div className="item-badges">
                            <div className="item-badge-right">
                              {key.vehicle_category}
                            </div>
                          </div>
                          <div className="item-meta">
                            <div className="item-price">
                              Rs.{key.vehicle_price}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Link
                        to={"/vehicle/edit/" + key.vehicle_id}
                        className="remove-item"
                      >
                        <i className="fa fa-edit" /> Edit Listing
                      </Link>
                    </div>
                    <div className="col-lg-7">
                      <div className="item-info">
                        <h3 className="item-title">
                          <Link to={"/vehicle/view/" + key.vehicle_id}>
                            {key.vehicle_title}
                          </Link>
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" />{" "}
                          {key.vehicle_address},{key.vehicle_district}
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
              </Fragment>
            );
          })}
          {this.state.company.map(key => {
            return (
              <Fragment>
                <div className="item" key={key.company_id}>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="item-image">
                        <Link to={"/company/view/" + key.company_id}>
                          <img
                            src={
                              "https://buyandsellnepal.tech/images/" +
                              key.photos
                            }
                            className="img-fluid"
                          />
                          <div className="item-badges">
                            <div className="item-badge-right">{key.status}</div>
                          </div>
                          <div className="item-meta">
                            <div className="item-price">
                              Rs.{key.company_price}
                            </div>
                          </div>
                        </Link>
                      </div>
                      <Link
                        href={"/company/view/" + key.company_id}
                        className="remove-item"
                      >
                        <i className="fa fa-edit" /> Edit Listing
                      </Link>{" "}
                    </div>
                    <div className="col-lg-7">
                      <div className="item-info">
                        <h3 className="item-title">
                          <Link to={"/company/view/" + key.company_id}>
                            {key.company_title}
                          </Link>
                        </h3>
                        <div className="item-location">
                          <i className="fa fa-map-marker" />{" "}
                          {key.company_address},{key.company_district}
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
              </Fragment>
            );
          })}
        </div>
        {/* <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                «
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                »
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
}
