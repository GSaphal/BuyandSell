import React, { Component, Fragment } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Axios from "axios";
import SimpleReactValidator from "simple-react-validator";
import Dropzone from "react-dropzone";

export default class AddListingBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      redirect: false,
      company_title: "",
      company_name: "",
      company_type: "",
      company_price: "",
      price_status: "",
      address: "",
      latitude: "",
      longitude: "",
      city: "",
      tole: "",
      district: "",
      country: "",
      province: "",
      ward_number: "",
      house_number: "",
      zip_code: "",
      number_of_rooms: "",
      salesperday: "",
      rent_of_rooms: "",
      used_for: "",
      tax_status: "",
      description: "",
      reasons_for_selling: "",
      products_worth: "",
      available_furniture: "",
      brand_name: "",
      decoration: "",
      parking: false,
      water: false,
      internet: false,
      bank_nearby: false,
      pitched_road: false,
      airport_nearby: false,
      sewage: false,
      alarm: false,
      cctv: false,
      ac: false,
      documents: [],
      files: []
    };

    this.onDrop = files => {
      this.state.files.length < 10 && files.length < 10
        ? this.setState({ files: this.state.files.concat(files) })
        : alert("You cannot upload more than 10 photos");
    };
    this.onFileDrop = files => {
      this.state.documents.length < 10 && files.length < 10
        ? this.setState({ documents: this.state.documents.concat(files) })
        : alert("You cannot upload more than 10 files");
    };

    this.arrayRemove = url => {
      const newArray = this.state.files.filter(item => item.path !== url);
      this.setState({ files: newArray });
    };
    this.arrayDocumentRemove = url => {
      const newArray = this.state.documents.filter(item => item.path !== url);
      this.setState({ documents: newArray });
    };
    this.validator = new SimpleReactValidator();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      data.append("photos[]", file, file.name);
    });
    this.state.documents.forEach(file => {
      data.append("document[]", file, file.name);
    });
    if (this.validator.allValid()) {
      let submitData = {
        company_title: this.state.company_title,
        company_name: this.state.company_name,
        company_type: this.state.company_type,
        company_price: this.state.company_price,
        price_status: this.state.price_status,
        address: this.state.address,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        city: this.state.city,
        tole: this.state.tole,
        district: this.state.district,
        country: this.state.country,
        province: this.state.province,
        ward_number: this.state.ward_number,
        house_number: this.state.house_number,
        zip_code: this.state.zip_code,
        number_of_rooms: this.state.number_of_rooms,
        salesperday: this.state.salesperday,
        rent_of_rooms: this.state.rent_of_rooms,
        used_for: this.state.used_for,
        tax_status: this.state.tax_status,
        description: this.state.description,
        reasons_for_selling: this.state.reasons_for_selling,
        products_worth: this.state.products_worth,
        available_furniture: this.state.available_furniture,
        brand_name: this.state.brand_name,
        decoration: this.state.decoration,
        parking: this.state.parking ? "yes" : "no",
        water: this.state.water ? "yes" : "no",
        internet: this.state.internet ? "yes" : "no",
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
      Axios.post("https://buyandsellnepal.tech/api/v1/company", data)
        .then(response => {
          console.log(response);
        })
        .then(response => {
          console.log(response);
          window.location.replace("/company/list");
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
          <h1>Submit your Company Here</h1>
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

        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <h3 className="subheadline">Basic Details</h3>
          <div className="form-group">
            <label htmlFor="company_title">
              Title for Ad<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="company_title"
              className="form-control form-control-lg"
              id="company_title"
              onChange={this.handleChange}
              defaultValue={this.state.company_title}
              autoFocus
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "company_title",
              this.state.company_title,
              "required"
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company_name">
              Company Name<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="company_name"
              className="form-control form-control-lg"
              id="company_name"
              onChange={this.handleChange}
              defaultValue={this.state.company_name}
              autoFocus
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "company_name",
              this.state.company_name,
              "required"
            )}
          </div>

          <div className="form-group">
            <label htmlFor="company_type">
              Company Type<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="company_type"
              className="form-control form-control-lg"
              id="company_type"
              onChange={this.handleChange}
              defaultValue={this.state.company_type}
              autoFocus
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "company_type",
              this.state.company_type,
              "required"
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company_price">
              Company Price<span className="text-danger px-1">*</span>
            </label>
            <input
              type="number"
              name="company_price"
              className="form-control form-control-lg"
              id="company_price"
              onChange={this.handleChange}
              defaultValue={this.state.company_price}
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "company_price",
              this.state.company_price,
              "required"
            )}
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
          <h3 className="subheadline">Features</h3>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="number_of_rooms">
                  Number of Rooms<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_rooms"
                  defaultValue={this.state.number_of_rooms}
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
                  "number_of_rooms",
                  this.state.number_of_rooms,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Rent of Rooms<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.rent_of_rooms}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="rent_of_rooms"
                  name="rent_of_rooms"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "rent_of_rooms",
                  this.state.rent_of_rooms,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Used for (in yrs)<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.used_for}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="used_for"
                  name="used_for"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "used_for",
                  this.state.used_for,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="tax_status">
                  Tax Status<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="tax_status"
                  id="tax_status"
                  defaultValue={this.state.tax_status}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  {" "}
                  <option selected disabled hidden></option>
                  <option value="cleared">Cleared</option>
                  <option value="notcleared">Remaining</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "tax_status",
                  this.state.tax_status,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Products Worth <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  defaultValue={this.state.products_worth}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="products_worth"
                  name="products_worth"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "products_worth",
                  this.state.products_worth,
                  "required"
                )}
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Sales per day<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  onChange={this.handleChange}
                  defaultValue={this.state.salesperday}
                  className="form-control form-control-lg"
                  id="salesperday"
                  name="salesperday"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "salesperday",
                  this.state.salesperday,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Brand Name<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.brand_name}
                  className="form-control form-control-lg"
                  id="brand_name"
                  name="brand_name"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "brand_name",
                  this.state.brand_name,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Available Furniture<span className="text-danger px-1">*</span>
                </label>
                <textarea
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.available_furniture}
                  className="form-control form-control-lg"
                  id="available_furniture"
                  name="available_furniture"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "available_furniture",
                  this.state.available_furniture,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Available Decoration
                  <span className="text-danger px-1">*</span>
                </label>
                <textarea
                  type="text"
                  onChange={this.handleChange}
                  defaultValue={this.state.decoration}
                  className="form-control form-control-lg"
                  id="decoration"
                  name="decoration"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "decoration",
                  this.state.decoration,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Reason for Selling<span className="text-danger px-1">*</span>
                </label>
                <textarea
                  type="text"
                  defaultValue={this.state.reasons_for_selling}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="reasons_for_selling"
                  name="reasons_for_selling"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "reasons_for_selling ",
                  this.state.reasons_for_selling,
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

          <br />
          <div className="form-group">
            <h3 className="subheadline">Additional Features</h3>
            <div className="feature-list">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="parking"
                  id="parking"
                  checked={this.state.parking}
                  onChange={this.handleChange}
                />
                <label htmlFor="parking">Parking</label>
              </div>
            </div>
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
              id="bank_nearby"
              name="bank_nearby"
              checked={this.state.bank_nearby}
              onChange={this.handleChange}
            />
            <label htmlFor="bank_nearby">Bank Nearby</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="pitched_road"
              name="pitched_road"
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
            <label htmlFor="airport_nearby">Airport Nearby</label>
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
              Company Description<span className="text-danger px-1">*</span>
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
            <h3 className="subheadline">
              Company Documents<span className="text-danger px-1">*</span>
            </h3>
            <small>
              You can upload 10 documents.You have{" "}
              {10 - this.state.documents.length} uploads remaining.
            </small>

            <Dropzone
              onDrop={this.onFileDrop}
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
            <div className="container-fluid">
              <div className="row">
                {this.state.documents.map(item => {
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
                            <button
                              className="btn btn-danger mt-2"
                              onClick={() =>
                                this.arrayDocumentRemove(item.path)
                              }
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
          </div>
          <div className="form-group">
            <h3 className="subheadline">
              Upload Photos<span className="text-danger px-1">*</span>
            </h3>
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
