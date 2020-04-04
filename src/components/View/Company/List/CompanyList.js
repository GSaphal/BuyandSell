import React, { Component, Fragment } from "react";
import Navbar from "../../../partials/Navbar";
import Footer from "../../../partials/Footer";
import Axios from "axios";
import ListView from "./ListView";
import queryString from "query-string";
import { Link } from "react-router-dom";

export default class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      maxPrice: "",
      minPrice: "",
      address: "",
      searchDistrict: "",
      category: "",
      city: "",
      data: [],
      categorylist: [],
      search: "",
      district: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.searchingApi(this.props.match.params.category);
    const values = queryString.parse(this.props.location.search);
    this.searchingApi(values);
    Axios.get(process.env.REACT_APP_API + "companycategory")
      .then((response) => {
        this.setState({
          categorylist: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      const values = queryString.parse(this.props.location.search);

      this.searchingApi(values);
    }
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.searchingApi(this.props.match.params.category);
    }
  }

  searchingApi = (data) => {
    typeof data === "object"
      ? this.setState({
          maxPrice: data.maxprice ? data.maxprice : "",
          minPrice: data.minprice ? data.minprice : "",
          address: data.address ? data.address : "",
          district: data.district ? data.district : "",
          city: data.city ? data.city : "",
        })
      : this.setState({
          category: this.props.match.params.category,
        });
    Axios.post(
      process.env.REACT_APP_API + "company/filter",
      typeof data === "object"
        ? {
            minprice: data.minprice,
            maxprice: data.maxprice,
            address: data.address,
            district: data.district,
            city: data.city,
          }
        : { category: data }
    )
      .then((response) => {
        console.log(response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      maxprice: this.state.maxPrice,
      minprice: this.state.minPrice,
      address: this.state.address,
      category: this.state.category,
      district: this.state.searchDistrict,
      city: this.state.city,
      search: this.state.search,
    };
    this.setState({
      isSearching: true,
    });
    Axios.post(process.env.REACT_APP_API + "company/search", {
      search: this.state.search,
    })
      .then((response) => {
        this.setState({
          data: response.data,
          isSearching: false,
        });
        const searchQuery =
          "?minprice=" +
          submitData.minprice +
          "&maxprice=" +
          submitData.maxprice +
          "&address=" +
          submitData.address +
          "&district=" +
          submitData.district +
          "&city=" +
          submitData.city +
          "&keywords=" +
          submitData.search;
        this.props.history.push(searchQuery);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isSearching: false,
        });
      });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const submitData = {
      maxprice: this.state.maxPrice,
      minprice: this.state.minPrice,
      address: this.state.address,
      category: this.state.category,
      district: this.state.searchDistrict,
      city: this.state.city,
    };
    Axios.post(process.env.REACT_APP_API + "company/filter", submitData)

      .then((response) => {
        this.setState({
          data: response.data,
        });
        const searchQuery =
          "?minprice=" +
          submitData.minprice +
          "&maxprice=" +
          submitData.maxprice +
          "&address=" +
          submitData.address +
          "&district=" +
          submitData.district +
          "&city=" +
          submitData.city;
        this.props.history.push(searchQuery);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const btnStyle = {
      background: "transparent",
      textAlign: "left",
      border: "none",
      fontSize: "16px",
    };
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="search-form">
            <div className="card">
              <div className="row">
                <div className="col-lg-10">
                  <div className="form-group">
                    <input
                      type="text"
                      name="search"
                      defaultValue={this.state.search}
                      id="search"
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      placeholder="Address, District, Category, Name..."
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="row justify-content-center">
                    <div className="form-group ">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        onClick={this.handleSearchSubmit}
                      >
                        {this.state.isSearching && (
                          <i className="fa fa-refresh fa-spin px-2"></i>
                        )}
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="content" className="pt0 pb0">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/comapany/list">Company</Link>
                    </li>
                  </ol>
                </nav>
                <div className="page-header">
                  <h1>Company</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <div className="col-md-4 col-lg-3">
                    <button
                      id="toggle-filters"
                      className="btn btn-primary btn-circle mobile-filter"
                    >
                      <i className="fa fa-filter" />
                    </button>
                    <div id="sidebar" className="sidebar-left">
                      <button className="close-panel btn btn-white">
                        <i className="fa fa-long-arrow-left" />
                      </button>
                      <div className="sidebar_inner">
                        <div id="filters">
                          <div className="card">
                            <div className="card-header">
                              <h4 className="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#p_features"
                                  aria-expanded="true"
                                  aria-controls="p_features"
                                >
                                  Category
                                  <i className="fa fa-caret-down float-right" />
                                </a>
                              </h4>
                            </div>
                            <div
                              id="p_features"
                              className="panel-collapse collapse "
                              role="tabpanel"
                            >
                              <div className="card-body mb-2">
                                {this.state.categorylist.map((category) => {
                                  return (
                                    <Fragment>
                                      <div className="listing pb-2 ">
                                        <u>
                                          <Link
                                            style={btnStyle}
                                            to={
                                              "/company/list/" +
                                              category.company_type
                                            }
                                          >
                                            {category.company_type}
                                          </Link>
                                        </u>
                                      </div>
                                    </Fragment>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="card py-3">
                            <div className="card-header">
                              <h4 className="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#p_budget"
                                  aria-expanded="true"
                                  aria-controls="p_type"
                                >
                                  Filters
                                  <i className="fa fa-caret-down float-right" />
                                </a>
                              </h4>
                            </div>
                            <div
                              id="p_budget"
                              className="panel-collapse collapse show"
                              role="tabpanel"
                            >
                              <form method="GET" onSubmit={this.handleSubmit}>
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="minPrice"
                                          className="form-control input-sm"
                                          placeholder="Min"
                                          value={this.state.minPrice}
                                          onChange={this.handleChange}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="maxPrice"
                                          value={this.state.maxPrice}
                                          className="form-control input-sm"
                                          onChange={this.handleChange}
                                          placeholder="Max"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <label htmlFor="Address" className="py-1">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    defaultValue={this.state.address}
                                    onChange={this.handleChange}
                                    className="form-control "
                                    id="address"
                                    name="address"
                                  />
                                  <label htmlFor="City" className="py-1">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    defaultValue={this.state.city}
                                    onChange={this.handleChange}
                                    className="form-control "
                                    id="city"
                                    name="city"
                                  />
                                  <label htmlFor="inputState" className="py-2">
                                    District
                                  </label>
                                  <input
                                    type="text"
                                    defaultValue={this.state.district}
                                    onChange={this.handleChange}
                                    className="form-control "
                                    id="district"
                                    name="district"
                                  />
                                  <div className="row justify-content-center my-3">
                                    <button
                                      type="submit"
                                      className="btn btn-primary btn-md m-auto"
                                      // disabled={this.state.loading}
                                    >
                                      {/* {this.state.loading && (
                                      <i className="fa fa-refresh fa-spin px-2"></i>
                                    )} */}
                                      Filter
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          {/* <div className="card">
                            <div className="card-header">
                              <h4 className="panel-title">
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#p_type"
                                  aria-expanded="true"
                                  aria-controls="p_type"
                                >
                                  Property Type
                                  <i className="fa fa-caret-down float-right" />
                                </a>
                              </h4>
                            </div>
                            <div
                              id="p_type"
                              className="panel-collapse collapse show"
                              role="tabpanel"
                            >
                              <div className="card-body">
                                <div className="checkbox ">
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    id="house"
                                  />
                                  <label htmlFor="property">Property</label>
                                </div>
                                <div className="checkbox ">
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    id="property"
                                  />
                                  <label htmlFor="company">Company</label>
                                </div>
                                <div className="checkbox ">
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    id="company"
                                  />
                                  <label htmlFor="rent">Rent</label>
                                </div>
                                <div className="checkbox ">
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    id="rent"
                                  />
                                  <label htmlFor="jobcompany">
                                    Job Company
                                  </label>
                                </div>
                                <div className="checkbox ">
                                  <input
                                    type="checkbox"
                                    defaultValue={1}
                                    id="vechiles"
                                  />
                                  <label htmlFor="vechiles">Vechiles</label>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-9">
                    <div className="sorting">
                      <div className="row justify-content-between">
                        <div className="col-sm-5 col-md-5 col-lg-4 col-xl-3">
                          <div className="form-group">
                            {/* <select className="form-control ui-select">
                              <option>Most recent</option>
                              <option>Highest price</option>
                              <option>Lowest price</option>
                              <option>Most reduced</option>
                              <option>Most popular</option>
                            </select> */}
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                          <div className="btn-group float-right" role="group">
                            {/* <a
                              href="real-estate/grid"
                              className="btn btn-light"
                            >
                              <i className="fa fa-th" />
                            </a> */}
                            <a
                              href="real-estate/list"
                              className="btn btn-light active"
                            >
                              <i className="fa fa-bars" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="item-listing list">
                      <ListView data={this.state.data} />
                    </div>
                    {/* <nav aria-label="Page navigation">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            «
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/#">
                            »
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
