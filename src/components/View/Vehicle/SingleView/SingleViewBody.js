import React, { Component, Fragment } from "react";
import Axios from "axios";
import Slider from "./Slider";
import Badge from "react-bootstrap/Badge";
import { compose, withProps } from "recompose";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export default class SingleViewBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      photos: [],
      documents: []
    };
  }
  componentDidMount() {
    const x = process.env.REACT_APP_API + "vehicles/" + this.props.id;
    Axios.get(x)
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data.data,
          photos: response.data.data.photos,
          documents: response.data.data.documents
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  ListSingle = (data, name) => {
    return (
      <li className="my-2">
        {name}
        {data == "yes" ? (
          <Badge pill variant="success" className="mx-2 px-2 py-1">
            {data}
          </Badge>
        ) : (
          <Badge pill variant="danger" className="mx-2 px-2 py-1">
            {data}
          </Badge>
        )}
      </li>
    );
  };
  render() {
    const swiperParams = {
      slidesPerView: 2,
      centeredSlides: false,
      effect: "slide",
      loop: true,
      spaceBetween: 40,
      shouldSwiperUpdate: true,
      rebuildOnUpdate: true,
      direction: "horizontal",

      breakpoints: {
        // when window width is <= 640px
        0: {
          slidesPerView: 1
        },
        385: {
          slidesPerView: 2
        },
        628: {
          slidesPerView: 3
        },
        850: {
          slidesPerView: 4
        },
        1300: {
          slidesPerView: 5
        }
      }
    };
    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAOJj_IHEdUyR5_FaxHqaUu9iJdTQhpwuk&sensor=false",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: 27.7172,
          lng: 85.324
        }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{
              lat: Number(this.state.data.latitude),
              lng: Number(this.state.data.longitude)
            }}
          />
        )}
      </GoogleMap>
    ));
    const photos = this.state.photos.map(item => {
      return item.photos;
    });
    const documents = this.state.documents.map(item => {
      return item.document;
    });
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-12 col-lg-12 col-xl-10">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/vehicle/list">Vehicle for Sale</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.data.company_name}
                </li>
              </ol>
              <div className="page-header bordered mb0">
                <div className="row">
                  <div className="col-md-8">
                    <Link
                      to="/vehicle/list"
                      className="btn-return"
                      title="Back"
                    >
                      <i className="fa fa-angle-left" />
                    </Link>
                    <h1>
                      {this.state.data.company_name}
                      {/* <span className="label label-bordered  p-2  mx-2">
                        {this.state.data.price_status}
                      </span> */}
                      <small>
                        <i className="fa fa-map-marker px-2 pt-1" />
                        {this.state.data.address}, {this.state.data.district}
                      </small>
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <div className="price">
                      Rs. {this.state.data.vehicle_price}
                      <small> Type: {this.state.data.vehicle_category}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" className="item-single">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-md-12 col-lg-12 col-xl-10">
                <div className="row row justify-content-md-center has-sidebar">
                  <div className="col-md-7 col-lg-8">
                    <Slider photos={photos} />
                    <div>
                      <div>
                        <ul className="item-features mt-3 ">
                          <li>
                            <span className="text-center">
                              {this.state.data.price_status}
                            </span>
                            Price Status
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.current_milage}</span>
                            Milage
                          </li>
                          <li className="text-center">
                            <h6>
                              {this.state.data.tax_status === "cleared" ? (
                                <Badge
                                  pill
                                  variant="success"
                                  className="mx-2 px-2 py-1 text-light"
                                >
                                  Cleared
                                </Badge>
                              ) : (
                                <Badge
                                  pill
                                  variant="danger text-light"
                                  className="mx-2 px-2 py-1"
                                >
                                  Remaining
                                </Badge>
                              )}
                            </h6>
                            Tax Status
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.kilometer_run}</span>
                            Kilometer Run
                          </li>
                        </ul>
                        <div className="item-description">
                          <h3 className="headline">Property Description</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: this.state.data.description
                            }}
                          ></div>
                        </div>
                        <h3 className="headline">Features</h3>
                        <ul className="checked_list feature-list">
                          <li className="my-2 ">
                            <strong>Ground Clearence:</strong>{" "}
                            {this.state.data.ground_clearance}
                          </li>
                          <li className="my-2 ">
                            <strong>Purchased Date: </strong>
                            {this.state.data.purchased_date}
                          </li>
                          <li className="my-2 ">
                            <strong>Fuel Tank Capacity:</strong>{" "}
                            {this.state.data.fuel_tank_capacity}
                          </li>
                          <li className="my-2 ">
                            <strong>Number of Doors:</strong>
                            {this.state.data.number_of_doors}
                          </li>
                          <li className="my-2 ">
                            <strong>Dimension:</strong>
                            {this.state.data.dimension}
                          </li>
                          <li className="my-2 ">
                            <strong>Weight: </strong>
                            {this.state.data.weight + " kg"}
                          </li>
                          <li className="my-2 ">
                            <strong>Air Conditioning: </strong>
                            {this.state.data.ac}
                          </li>
                          <li className="my-2 ">
                            <strong>Driver Seat Adjustment: </strong>
                            {this.state.data.driver_seat_adjustment}
                          </li>
                          <li className="my-2 ">
                            <strong>Warrenty Type: </strong>
                            {this.state.data.warrenty_type}
                          </li>
                          <li className="my-2 ">
                            <strong>Warrenty Period: </strong>
                            {this.state.data.warrenty_period === null
                              ? "None"
                              : this.state.data.warrenty_period}
                          </li>
                          <li className="my-2 ">
                            <strong>Warrenty Includes: </strong>
                            {this.state.data.warrenty_includes === null
                              ? "None"
                              : this.state.data.warrenty_includes}
                          </li>
                        </ul>
                        <h3 className="headline">Other Features</h3>
                        <ul className="checked_list feature-list">
                          {this.ListSingle(
                            this.state.data.power_window,
                            "Power Window"
                          )}
                          {this.ListSingle(
                            this.state.data.power_steering,
                            "Power Steering"
                          )}
                          {this.ListSingle(
                            this.state.data.central_lock,
                            "Central Lock"
                          )}
                          {this.ListSingle(
                            this.state.data.tubeless_tyres,
                            "Keyless Remote Entry"
                          )}
                          {this.ListSingle(
                            this.state.data.air_bags,
                            "Air Bags"
                          )}
                          {this.ListSingle(
                            this.state.data.anti_lock_braking,
                            "Anti Lock Braking"
                          )}
                          {this.ListSingle(
                            this.state.data.steering_mounted_controls,
                            "Steering Mounted Controls"
                          )}
                          {this.ListSingle(
                            this.state.data.electric_side_mirror,
                            "Electric Side Mirror"
                          )}
                          {this.ListSingle(
                            this.state.data.child_safety_lock,
                            "Child Safety Lock"
                          )}
                          {this.ListSingle(
                            this.state.data.passenger_seat_adjustment,
                            "Passenger Seat Adjustment"
                          )}
                        </ul>
                      </div>
                      <div className="item-description mb-5">
                        <h3 className="headline">Attached Documents</h3>
                        <Swiper {...swiperParams} shouldSwiperUpdate>
                          {documents.map((document, key) => {
                            return (
                              <a
                                key={document}
                                href={
                                  "https://buyandsellnepal.tech/documents/" +
                                  document
                                }
                                target="_blank"
                              >
                                <div>
                                  <img
                                    className="img-fluid"
                                    style={{ height: 200, width: 200 }}
                                    src={
                                      "https://buyandsellnepal.tech/documents/" +
                                      document
                                    }
                                  />
                                </div>
                              </a>
                            );
                          })}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4">
                    <div id="sidebar" className="sidebar-right">
                      <div className="sidebar_inner">
                        <div id="feature-list" role="tablist">
                          <div className="card">
                            <div
                              className="card-header"
                              role="tab"
                              id="headingOne"
                            >
                              <h4 className="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  href="#specification"
                                  aria-expanded="true"
                                  aria-controls="specification"
                                >
                                  Specifications
                                  <i className="fa fa-caret-down float-right" />
                                </a>
                              </h4>
                            </div>
                            <div
                              id="specification"
                              className="panel-collapse collapse show"
                              role="tabpanel"
                            >
                              <div className="card-body">
                                <table className="table v1">
                                  <tbody>
                                    <tr>
                                      <td>Color</td>
                                      <td>{this.state.data.vehicle_color}</td>
                                    </tr>
                                    <tr>
                                      <td>Condition</td>
                                      <td>{this.state.data.condition}</td>
                                    </tr>
                                    <tr>
                                      <td>Engine Capacity</td>
                                      <td>{this.state.data.engine + " cc"}</td>
                                    </tr>
                                    <tr>
                                      <td>Fuel Type</td>
                                      <td>{this.state.data.fuel_type}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-4">
          <div className="row justify-content-center">
            <div style={{ minWidth: "90%", minHeight: "40vh" }}>
              <MyMapComponent isMarkerShown />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
