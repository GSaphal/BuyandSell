import React, { Component, Fragment } from "react";
import Axios from "axios";
import Slider from "./Slider";
import Badge from "react-bootstrap/Badge";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { compose, withProps } from "recompose";
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
    const x = "https://buyandsellnepal.tech/api/v1/company/" + this.props.id;
    Axios.get(x)
      .then(response => {
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
    console.log(this.state.documents);
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
    const photos = this.state.photos.map(item => {
      return item.photos;
    });
    const documents = this.state.documents.map(item => {
      return item.document;
    });
    console.log(documents);
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
                  <Link to="/company/list">Company</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.data.company_name}
                </li>
              </ol>
              <div className="page-header bordered mb0">
                <div className="row">
                  <div className="col-md-8">
                    <Link
                      to="/company/list"
                      className="btn-return"
                      title="Back"
                    >
                      <i className="fa fa-angle-left" />
                    </Link>
                    <h1>
                      {this.state.data.company_name}
                      {/* <span className="label label-bordered  p-2  mx-2">
                        For {this.state.data.property_status}
                      </span> */}
                      <small>
                        <i className="fa fa-map-marker px-2 pt-1" />
                        {this.state.data.address}, {this.state.data.district}
                      </small>
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <div className="price">
                      Rs. {this.state.data.company_price}
                      <small> {this.state.data.company_type}</small>
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
                        <ul className="item-features mt-3 text-center">
                          <li>
                            <span className="text-center">
                              {this.state.data.salesperday}
                            </span>
                            Sales Per Day
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.number_of_rooms}</span>
                            Rooms
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
                            <span>{this.state.data.used_for}</span> Used for
                            (yrs)
                          </li>
                        </ul>
                        <div className="item-description">
                          <h3 className="headline">Company Description</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: this.state.data.description
                            }}
                          ></div>
                        </div>
                        <h3 className="headline">Specific Features</h3>
                        <ul className="checked_list feature-list">
                          <li>
                            <strong>Furniture:</strong>{" "}
                            {this.state.data.available_furniture}
                          </li>
                          <br />
                          <li>
                            <strong>Decorations:</strong>{" "}
                            {this.state.data.decoration}
                          </li>
                        </ul>
                        <h3 className="headline">Features</h3>

                        <ul className="checked_list feature-list">
                          {this.ListSingle(
                            this.state.data.internet,
                            "Internet"
                          )}
                          {this.ListSingle(this.state.data.parking, "Parking")}
                          {this.ListSingle(this.state.data.water, "Water")}
                          {this.ListSingle(
                            this.state.data.bank_nearby,
                            "Bank Nearby"
                          )}
                          {this.ListSingle(
                            this.state.data.pitched_road,
                            "Pitched Road"
                          )}
                          {this.ListSingle(
                            this.state.data.airport_nearby,
                            "Airport  Nearby"
                          )}
                          {this.ListSingle(this.state.data.sewage, "Sewage")}
                          {this.ListSingle(this.state.data.alarm, "Alarm")}
                          {this.ListSingle(this.state.data.cctv, "CCTV")}
                          {this.ListSingle(this.state.data.ac, "AC")}
                        </ul>
                      </div>
                    </div>
                    <div className="item-description">
                      <h3 className="headline">Reason for Selling</h3>
                      <div className="card">
                        <div className="card-body">
                          {this.state.data.reasons_for_selling}{" "}
                        </div>
                      </div>
                      <div className="item-description mb-5">
                        <h3 className="headline">Attached Documents</h3>
                        <Swiper {...swiperParams} shouldSwiperUpdate>
                          {documents.map((document, key) => {
                            {
                              console.log(documents);
                            }
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
                                    style={{ height: 150, width: 150 }}
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
                                      <td>Price Status</td>
                                      <td>{this.state.data.price_status}</td>
                                    </tr>
                                    <tr>
                                      <td>No of Rooms</td>
                                      <td>{this.state.data.number_of_rooms}</td>
                                    </tr>
                                    <tr>
                                      <td>Rent of Rooms</td>
                                      <td>
                                        {"Rs " + this.state.data.rent_of_rooms}
                                      </td>
                                    </tr>

                                    <tr>
                                      <td>Products Worth</td>
                                      <td>
                                        {"Rs " + this.state.data.products_worth}
                                      </td>
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
          <div class="row justify-content-center">
            <div style={{ minWidth: "90%", minHeight: "40vh" }}>
              <MyMapComponent isMarkerShown />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
