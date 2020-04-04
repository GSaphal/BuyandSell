import React, { Component, Fragment } from "react";
import Axios from "axios";
import Slider from "./Slider";
import Badge from "react-bootstrap/Badge";
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
      photos: []
    };
  }
  componentDidMount() {
    const x =
      "https://buyandsellnepal.tech/api/v1/realestates/" + this.props.id;
    Axios.get(x)
      .then(response => {
        this.setState({
          data: response.data.data,
          photos: response.data.data.photos
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
    const photos = this.state.photos.map(item => {
      return item.photos;
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
                  <Link to="/realestate/list">Property for Sale</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {this.state.data.property_name}
                </li>
              </ol>
              <div className="page-header bordered mb0">
                <div className="row">
                  <div className="col-md-8">
                    <Link
                      to="/realestate/list"
                      className="btn-return"
                      title="Back"
                    >
                      <i className="fa fa-angle-left" />
                    </Link>
                    <h1>
                      {this.state.data.property_name}
                      <span className="label label-bordered  p-2  mx-2">
                        For {this.state.data.property_status}
                      </span>
                      <small>
                        <i className="fa fa-map-marker px-2 pt-1" />
                        {this.state.data.address}, {this.state.data.district}
                      </small>
                    </h1>
                  </div>
                  <div className="col-md-4">
                    <div className="price">
                      Rs. {this.state.data.property_price}
                      <small> {this.state.data.category}</small>
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
                              {this.state.data.number_of_kitchens}
                            </span>
                            Kitchens
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.number_of_floors}</span>
                            Floors
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.number_of_bedrooms}</span>
                            Bedrooms
                          </li>
                          <li className="text-center">
                            <span>{this.state.data.number_of_bathrooms}</span>
                            Bathrooms
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

                        <h3 className="headline">Property Features</h3>
                        <ul className="checked_list feature-list">
                          {this.ListSingle(this.state.data.alarm, "Alarm")}
                          {this.ListSingle(this.state.data.garden, "Garden")}
                          {this.ListSingle(this.state.data.parking, "Parking")}
                          {this.ListSingle(
                            this.state.data.swimming_pool,
                            "Swimming Pool"
                          )}
                          {this.ListSingle(this.state.data.gym, "Gym")}
                          {this.ListSingle(
                            this.state.data.internet,
                            "Internet"
                          )}
                          {this.ListSingle(this.state.data.water, "Water")}
                          {this.ListSingle(
                            this.state.data.school_college_nearby,
                            "School/College Nearby"
                          )}
                          {this.ListSingle(
                            this.state.data.shopping_nearby,
                            "Shopping/Grocery Nearby"
                          )}
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
                            "Airport"
                          )}
                          {this.ListSingle(this.state.data.sewage, "Sewage")}
                          {this.ListSingle(this.state.data.cctv, "CCTV")}
                        </ul>
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
                                      <td>Area</td>
                                      <td>{this.state.data.property_area}</td>
                                    </tr>
                                    <tr>
                                      <td>Area Type</td>
                                      <td>{this.state.data.area_type}</td>
                                    </tr>
                                    <tr>
                                      <td>Mohoda Length</td>
                                      <td>{this.state.data.mohoda_length}</td>
                                    </tr>
                                    <tr>
                                      <td>Mohoda Direction</td>
                                      <td>
                                        {this.state.data.mohoda_direction}
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
