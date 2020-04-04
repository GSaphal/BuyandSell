import React, { Component, Fragment } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import Dropzone from "react-dropzone";

export default class AddListingBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorylist: [],
      loading: false,
      error: false,
      redirect: false,
      property_name: "",
      property_status: "",
      property_price: "",
      price_status: "",
      address: "",
      city: "",
      tole: "",
      category: "",
      district: "",
      country: "",
      province: "",
      ward_number: "",
      house_number: "",
      zip_code: "",
      area_type: "Aana",
      latitude: "",
      longitude: "",
      property_area: "",
      number_of_bedrooms: "",
      number_of_bathrooms: "",
      number_of_floors: "",
      number_of_kitchen: "",
      built_year: "",
      mohoda_length: "",
      mohoda_direction: "East",
      category: "",
      description: "",
      gym: false,
      garden: false,
      swimming_pool: false,
      internet: false,
      parking: false,
      water: false,
      school_college_nearby: false,
      shopping_nearby: false,
      bank_nearby: false,
      pitched_road: false,
      airport_nearby: false,
      sewage: false,
      alarm: false,
      cctv: false,
      ac: false,
      files: []
    };

    this.onDrop = files => {
      this.state.files.length < 10 && files.length < 10
        ? this.setState({ files: this.state.files.concat(files) })
        : alert("You cannot upload more than 10 photos");
    };

    this.arrayRemove = url => {
      const newArray = this.state.files.filter(item => item.path !== url);
      this.setState({ files: newArray });
    };
    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    Axios.get("https://buyandsellnepal.tech/api/v1/realestatecategory")
      .then(response => {
        this.setState({
          categorylist: response.data.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleEditorChange = content => {
    this.setState({ description: content });
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const data = new FormData();
    this.state.files.forEach(file => {
      data.append("property_image[]", file, file.name);
    });
    if (this.validator.allValid()) {
      let submitData = {
        property_name: this.state.property_name,
        property_status: this.state.property_status,
        property_price: this.state.property_price,
        price_status: this.state.price_status,
        address: this.state.address,
        city: this.state.city,
        district: this.state.district,
        country: this.state.country,
        province: this.state.province,
        ward_number: this.state.ward_number,
        tole: this.state.tole,
        house_number: this.state.house_number,
        zip_code: this.state.zip_code,
        property_area: this.state.property_area,
        number_of_bedrooms: this.state.number_of_bedrooms,
        number_of_bathrooms: this.state.number_of_bathrooms,
        number_of_floors: this.state.number_of_floors,
        description: this.state.description,
        category_name: this.state.category,
        built_year: this.state.built_year,
        area_type: this.state.area_type,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        mohoda_direction: this.state.mohoda_direction,
        mohoda_length: this.state.mohoda_length,
        gym: this.state.gym ? "yes" : "no",
        number_of_kitchen: this.state.number_of_kitchen,
        garden: this.state.garden ? "yes" : "no",
        swimming_pool: this.state.swimming_pool ? "yes" : "no",
        internet: this.state.internet ? "yes" : "no",
        parking: this.state.parking ? "yes" : "no",
        water: this.state.water ? "yes" : "no",
        school_college_nearby: this.state.school_college_nearby ? "yes" : "no",
        shopping_nearby: this.state.shopping_nearby ? "yes" : "no",
        bank_nearby: this.state.bank_nearby ? "yes" : "no",
        pitched_road: this.state.pitched_road ? "yes" : "no",
        airport_nearby: this.state.airport_nearby ? "yes" : "no",
        sewage: this.state.sewage ? "yes" : "no",
        alarm: this.state.alarm ? "yes" : "no",
        cctv: this.state.cctv ? "yes" : "no",
        ac: this.state.ac ? "yes" : "no"
      };

      console.log(submitData);
      for (var key in submitData) {
        data.append(key, submitData[key]);
      }
      Axios.post("https://buyandsellnepal.tech/api/v1/realestates", data)
        .then(response => {
          window.location.replace("/realestate/list");
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: true,
            loading: false
          });
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const dropzoneStyle = {
      width: "100%",
      height: "20%",
      marginTop: "20px",
      border: "1px solid #D2D2D2"
    };

    return (
      <div className="col-md-7 col-lg-8 col-xl-8">
        <div className="page-header bordered">
          <h1>Submit your Property here</h1>
        </div>
        {this.state.error ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Some Error Occoured! Please Try Again
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        ) : (
          ""
        )}

        <form
          method="POST"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <h3 className="subheadline">Basic Details</h3>

          <div className="form-group">
            <label htmlFor="property_name">
              Property Title<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="property_name"
              className="form-control form-control-lg"
              id="property_name"
              onChange={this.handleChange}
              defaultValue={this.state.property_name}
              autoFocus
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "property_name",
              this.state.property_name,
              "required"
            )}
          </div>
          <div className="form-group">
            <label>
              For Sale/Rent?<span className="text-danger px-1">*</span>
            </label>
            <div>
              <div className="radio radio-inline">
                <input
                  type="radio"
                  name="property_status"
                  id="rent"
                  onChange={this.handleChange}
                  defaultValue="rent"
                />
                <label htmlFor="rent">Rent</label>
              </div>
              <div className="radio radio-inline">
                <input
                  type="radio"
                  name="property_status"
                  onChange={this.handleChange}
                  id="sell"
                  defaultValue="sell"
                />
                <label htmlFor="sell">Sell</label>
              </div>
            </div>
            <div className="text-danger my-2">
              {this.validator.message(
                "property_status",
                this.state.property_status,
                "required"
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Category<span className="text-danger px-1">*</span>
            </label>
            <select
              name="category"
              id="category"
              defaultValue={this.state.category}
              onChange={this.handleChange}
              className="form-control form-control-lg "
            >
              <option value="none" selected disabled hidden>
                Select a Category
              </option>
              {this.state.categorylist.map(category => {
                return (
                  <option key={category.id} value={category.category_name}>
                    {category.category_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "category",
              this.state.category,
              "required"
            )}
          </div>
          <div className="form-group">
            <label>
              Price<span className="text-danger px-1">*</span>
            </label>
            <input
              type="number"
              placeholder="Price in Rs."
              name="property_price"
              defaultValue={this.state.property_price}
              onChange={this.handleChange}
              className="form-control form-control-lg"
            />

            <div className="text-danger my-2">
              {this.validator.message(
                "property_price",
                this.state.property_price,
                "required"
              )}
            </div>
          </div>

          <div className="form-group">
            <label>
              Is Price Fixed/Negotiable?
              <span className="text-danger px-1">*</span>
            </label>
            <div>
              <div className="radio radio-inline">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="price_status"
                  id="fixed"
                  defaultValue="fixed"
                />
                <label htmlFor="fixed">Fixed</label>
              </div>
              <div className="radio radio-inline">
                <input
                  type="radio"
                  onChange={this.handleChange}
                  name="price_status"
                  id="negotiable"
                  defaultValue="negotiable"
                />
                <label htmlFor="negotiable">Negotiable</label>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "price_status",
                  this.state.price_status,
                  "required"
                )}
              </div>
            </div>
          </div>

          <h3 className="subheadline">Location</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Tole<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.tole}
                  className="form-control form-control-lg"
                  id="tole"
                  name="tole"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message("tole", this.state.tole, "required")}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Address<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.address}
                  className="form-control form-control-lg"
                  id="address"
                  name="address"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "address",
                  this.state.address,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  City<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.city}
                  className="form-control form-control-lg"
                  id="city"
                  name="city"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message("city", this.state.city, "required")}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  District<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={this.state.district}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="district"
                  name="district"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "district",
                  this.state.district,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Country<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={this.state.country}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="country"
                  name="country"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "country",
                  this.state.country,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="Province">
                  Province<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="province"
                  id="province"
                  defaultValue={this.state.province}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option selected disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "province",
                  this.state.province,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Ward No<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.ward_number}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="ward_number"
                  name="ward_number"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "ward_number",
                  this.state.ward_number,
                  "required"
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label>House Number</label>
                <input
                  type="number"
                  defaultValue={this.state.house_number}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="house_number"
                  name="house_number"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Zipcode<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.zip_code}
                  className="form-control form-control-lg"
                  id="zip_code"
                  name="zip_code"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "zip_code",
                  this.state.zip_code,
                  "required"
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>
                  Year Built<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="date"
                  defaultValue={this.state.built_year}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="built_year"
                  name="built_year"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "built_year",
                  this.state.built_year,
                  "required"
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Property Area<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.property_area}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="property_area"
                  placeholder="Area in Aana/Dhur"
                  name="property_area"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "property_area",
                  this.state.property_area,
                  "required"
                )}
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="area_type">
                  Area Type<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="area_type"
                  defaultValue={this.state.area_type}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                >
                  <option value="Aana" selected>
                    Aana
                  </option>
                  <option value="Dhur">Dhur</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "area_type",
                  this.state.area_type,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>
                  Mohada Length<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.mohoda_length}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="mohoda_length"
                  name="mohoda_length"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "mohoda_length",
                  this.state.mohoda_length,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="mohoda_direction">
                  Mohoda Direction<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="mohoda_direction"
                  defaultValue={this.state.mohoda_direction}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                >
                  {" "}
                  <option value="East" selected>
                    East
                  </option>
                  <option value="West">West</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "mohoda_direction",
                  this.state.mohoda_direction,
                  "required"
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Latitude (Optional)</label>
                <input
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.latitude}
                  className="form-control form-control-lg"
                  id="latitude"
                  name="latitude"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Longitude (Optional)</label>
                <input
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.longitude}
                  className="form-control form-control-lg"
                  id="longitude"
                  name="longitude"
                />
              </div>
            </div>
          </div>
          <h3 className="subheadline">Features</h3>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="bedrooms">
                  Bedrooms<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_bedrooms"
                  defaultValue={this.state.number_of_bedrooms}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                >
                  {" "}
                  <option selected disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "number_of_bedrooms",
                  this.state.number_of_bedrooms,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="number_of_bathrooms">
                  Bathrooms<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_bathrooms"
                  id="number_of_bathrooms"
                  defaultValue={this.state.no_of_bathrooms}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  {" "}
                  <option selected disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "number_of_bathrooms",
                  this.state.number_of_bathrooms,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="bathrooms">
                  Floors<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_floors"
                  id="number_of_floors"
                  defaultValue={this.state.number_of_floors}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  {" "}
                  <option selected disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "number_of_floors",
                  this.state.number_of_floors,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="number_of_kitchen">
                  Kitchen<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_kitchen"
                  id="number_of_kitchen"
                  defaultValue={this.state.number_of_kitchen}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  {" "}
                  <option selected disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "number_of_kitchen",
                  this.state.number_of_kitchen,
                  "required"
                )}
              </div>
            </div>
          </div>

          <br />
          <div className="form-group">
            <h3 className="subheadline">Additional Features</h3>
            <div className="feature-list">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="garden"
                  id="garden"
                  checked={this.state.garden}
                  onChange={this.handleChange}
                />
                <label htmlFor="garden">Garden</label>
              </div>
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="gym"
              id="gym"
              checked={this.state.gym}
              onChange={this.handleChange}
            />
            <label htmlFor="gym">Gym</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="internet"
              name="internet"
              checked={this.state.internet}
              onChange={this.handleChange}
            />
            <label htmlFor="internet">Internet</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="swimming_pool"
              name="swimming_pool"
              checked={this.state.swimming_pool}
              onChange={this.handleChange}
            />
            <label htmlFor="swimming_pool">Swimming Pool</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="water"
              name="water"
              checked={this.state.water}
              onChange={this.handleChange}
            />
            <label htmlFor="water">Water</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="parking"
              name="parking"
              name="parking"
              checked={this.state.parking}
              onChange={this.handleChange}
            />
            <label htmlFor="parking">Parking</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="school_college_nearby"
              name="school_college_nearby"
              checked={this.state.school_college_nearby}
              onChange={this.handleChange}
            />
            <label htmlFor="school_college_nearby">School/College Nearby</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="shopping_nearby"
              name="shopping_nearby"
              checked={this.state.shopping_nearby}
              onChange={this.handleChange}
            />
            <label htmlFor="shopping_nearby">Shopping/GroceryNearby</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="bank_nearby"
              name="bank_nearby"
              checked={this.state.bank_nearby}
              onChange={this.handleChange}
            />
            <label htmlFor="bank_nearby">Bank</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="pitched_road"
              name="pitched_road"
              checked={this.state.pitched_road}
              onChange={this.handleChange}
            />
            <label htmlFor="pitched_road">Pitched Road</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="airport_nearby"
              name="airport_nearby"
              checked={this.state.airport_nearby}
              onChange={this.handleChange}
            />
            <label htmlFor="airport_nearby">Airport</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="sewage"
              name="sewage"
              checked={this.state.sewage}
              onChange={this.handleChange}
            />
            <label htmlFor="sewage">Sewage</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="alarm"
              name="alarm"
              checked={this.state.alarm}
              onChange={this.handleChange}
            />
            <label htmlFor="alarm">Alarm</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="cctv"
              name="cctv"
              checked={this.state.cctv}
              onChange={this.handleChange}
            />
            <label htmlFor="cctv">CCTV Camera</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="ac"
              name="ac"
              checked={this.state.ac}
              onChange={this.handleChange}
            />
            <label htmlFor="ac">Air Conditioning</label>
          </div>
          <div className="form-group">
            <h3 className="subheadline">
              Property Description<span className="text-danger px-1">*</span>
            </h3>

            <Editor
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help"
              }}
              onEditorChange={this.handleEditorChange}
            />
          </div>
          <div className="form-group">
            <h3 className="subheadline">Upload Photos</h3>
            <small>
              You can upload 10 photos.You have {10 - this.state.files.length}{" "}
              uploads remaining.
            </small>
            <Dropzone
              onDrop={this.onDrop}
              accept="image/png, image/gif, image/jpeg"
              minSize={0}
              maxSize={5242880}
              multiple
            >
              {({ getRootProps, getInputProps }) => (
                <section className="container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p className="p-4" style={dropzoneStyle}>
                      Click here or drop a file to upload!
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="container-fluid">
            <div className="row">
              {this.state.files.map(item => {
                return (
                  <Fragment key={item.path}>
                    <div
                      className=" col-md-2 mx-1 card"
                      style={{ width: "8rem", boxShadow: "none" }}
                    >
                      <img
                        className="card-img-top"
                        src={URL.createObjectURL(item)}
                        style={{ height: "5rem", width: "5rem" }}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {" "}
                          <button
                            className="btn btn-danger mt-2"
                            onClick={() => this.arrayRemove(item.path)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-lg btn-primary mt-3"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <i className="fa fa-refresh fa-spin px-2"></i>
              )}
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
