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
      errorMessage: "",
      redirect: false,
      company_name: "",
      number: "",
      purchased_date: "",
      condition: "",
      vehicle_price: "",
      price_status: "",
      ground_clearance: "",
      seat_capacity: "",
      fuel_tank_capacity: "",
      kilometer_run: "",
      current_milage: "",
      vehicle_color: "",
      vehicle_title: "",
      vehicle_category: "",
      number_of_doors: 0,
      fuel_type: "Petrol",
      engine: "",
      dimension: "",
      weight: "",
      warrenty_type: "No Warrenty",
      warrenty_period: "",
      warrenty_includes: "",
      ac: "None",
      driver_seat_adjustment: "None",
      tole: "",
      address: "",
      city: "",
      district: "",
      country: "",
      ward_no: "",
      zipcode: "",
      province: "",
      latitude: "",
      longitude: "",
      tax_status: "Cleared",
      power_window: "",
      power_steering: "",
      central_lock: "",
      keyless_remote_entry: "",
      tubeless_tyres: "",
      air_bags: "",
      anti_lock_braking: "",
      steering_mounted_controls: "",
      electric_side_mirror: "",
      child_safety_lock: "",
      passenger_seat_adjustment: "",
      description: "",
      files: [],
      documents: []
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
  componentDidMount() {
    Axios.get("https://buyandsellnepal.tech/api/v1/vehiclecategory")
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
      data.append("photos[]", file, file.name);
    });
    this.state.documents.forEach(file => {
      data.append("document[]", file, file.name);
    });
    if (this.validator.allValid()) {
      let submitData = {
        vehicle_title: this.state.vehicle_title,
        company_name: this.state.company_name,
        number: this.state.number,
        purchased_date: this.state.purchased_date,
        condition: this.state.condition,
        vehicle_price: this.state.vehicle_price,
        price_status: this.state.price_status,
        ground_clearance: this.state.ground_clearance,
        seat_capacity: this.state.seat_capacity,
        fuel_tank_capacity: this.state.fuel_tank_capacity,
        kilometer_run: this.state.kilometer_run,
        current_milage: this.state.current_milage,
        vehicle_color: this.state.vehicle_color,
        vehicle_category: this.state.vehicle_category,
        number_of_doors: this.state.number_of_doors,
        fuel_type: this.state.fuel_type,
        engine: this.state.engine,
        dimension: this.state.dimension,
        weight: this.state.weight,
        warrenty_type: this.state.warrenty_type,
        warrenty_period: this.state.warrenty_period,
        warrenty_includes: this.state.warrenty_includes,
        ac: this.state.number_of_doors,
        driver_seat_adjustment: this.state.number_of_doors,
        tole: this.state.tole,
        address: this.state.address,
        city: this.state.city,
        district: this.state.district,
        province: this.state.province,
        country: this.state.country,
        ward_no: this.state.ward_no,
        zipcode: this.state.zipcode,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        tax_status: this.state.tax_status,
        power_window: this.state.power_window ? "yes" : "no",
        power_steering: this.state.power_steering ? "yes" : "no",
        central_lock: this.state.central_lock ? "yes" : "no",
        keyless_remote_entry: this.state.keyless_remote_entry ? "yes" : "no",
        tubeless_tyres: this.state.tubeless_tyres ? "yes" : "no",
        air_bags: this.state.air_bags ? "yes" : "no",
        anti_lock_braking: this.state.anti_lock_braking ? "yes" : "no",
        steering_mounted_controls: this.state.steering_mounted_controls
          ? "yes"
          : "no",
        electric_side_mirror: this.state.electric_side_mirror ? "yes" : "no",
        child_safety_lock: this.state.child_safety_lock ? "yes" : "no",
        passenger_seat_adjustment: this.state.passenger_seat_adjustment
          ? "yes"
          : "no",
        description: this.state.description
      };

      console.log(submitData);
      for (var key in submitData) {
        data.append(key, submitData[key]);
      }
      Axios.post(process.env.REACT_APP_API + "vehicles", data)
        .then(response => {
          this.setState({
            errorMessage: response.errors
          });
          window.location.replace("/vehicle/list");
        })
        .catch(error => {
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
          <h1>
            Submit your Vehicle here
            <small>We've over 15 Lac buyers and tenants for you!</small>
          </h1>
        </div>

        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <h3 className="subheadline">Basic Details</h3>

          <div className="form-group">
            <label htmlFor="vehicle_title">
              Title<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="vehicle_title"
              className="form-control form-control-lg"
              id="vehicle_title"
              onChange={this.handleChange}
              defaultValue={this.state.vehicle_title}
              autoFocus
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "vehicle_title",
              this.state.vehicle_title,
              "required"
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company_name">
              Company Name/Model Name<span className="text-danger px-1">*</span>
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
            <label htmlFor="category">
              Category<span className="text-danger px-1">*</span>
            </label>
            <select
              name="vehicle_category"
              id="vehicle_category"
              defaultValue={this.state.vehicle_category}
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
              "vehicle_category",
              this.state.vehicle_category,
              "required"
            )}
          </div>
          <div className="form-group">
            <label htmlFor="number">
              Vehicle Number<span className="text-danger px-1">*</span>
            </label>
            <input
              type="text"
              name="number"
              className="form-control form-control-lg"
              id="number"
              placeholder="Ba 80 Pa 2931"
              onChange={this.handleChange}
              defaultValue={this.state.number}
            />
          </div>
          <div className="text-danger my-2">
            {this.validator.message("number", this.state.number, "required")}
          </div>

          <div className="form-group">
            <label htmlFor="bedrooms">
              Condition<span className="text-danger px-1">*</span>
            </label>
            <select
              name="condition"
              defaultValue={this.state.condition}
              onChange={this.handleChange}
              className="form-control form-control-lg"
            >
              <option selected disabled hidden></option>
              <option value="New">Brand New</option>
              <option value="Used">Used Few Times</option>
              <option value="Excellent">Excellent</option>
              <option value="Good/Fair">Good/Fair</option>
              <option value="Not Working">Not Working</option>
            </select>
          </div>
          <div className="text-danger my-2">
            {this.validator.message(
              "condition",
              this.state.condition,
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
                <label>
                  Purchased Date<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="date"
                  placeholder="Price in Rs."
                  name="purchased_date"
                  defaultValue={this.state.purchased_date}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "purchased_date",
                    this.state.purchased_date,
                    "required"
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Price <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Price in Rs."
                  name="vehicle_price"
                  defaultValue={this.state.vehicle_price}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "vehicle_price",
                    this.state.vehicle_price,
                    "required"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Ground Clearance<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  name="ground_clearance"
                  defaultValue={this.state.ground_clearance}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "ground_clearance",
                    this.state.ground_clearance,
                    "required"
                  )}
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="seat_capacity">
                  Seat Capacity<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="seat_capacity"
                  id="seat_capacity"
                  defaultValue={this.state.seat_capacity}
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
                  "seat_capacity",
                  this.state.seat_capacity,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Kilometer Run<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  name="kilometer_run"
                  defaultValue={this.state.kilometer_run}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "kilometer_run",
                    this.state.kilometer_run,
                    "required"
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Fuel Tank Capacity <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  name="fuel_tank_capacity"
                  defaultValue={this.state.fuel_tank_capacity}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "fuel_tank_capacity",
                    this.state.fuel_tank_capacity,
                    "required"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Current Milage<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  name="current_milage"
                  defaultValue={this.state.current_milage}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "current_milage",
                    this.state.current_milage,
                    "required"
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Vehicle Color <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  name="vehicle_color"
                  defaultValue={this.state.vehicle_color}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "vehicle_color",
                    this.state.vehicle_color,
                    "required"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Engine Capacity ( in CC)
                  <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  name="engine"
                  defaultValue={this.state.engine}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "engine",
                    this.state.engine,
                    "required"
                  )}
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="seat_capacity">
                  Number of Doors<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="number_of_doors"
                  id="number_of_doors"
                  value={this.state.number_of_doors}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="0">0</option>
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
                  "number_of_doors",
                  this.state.number_of_doors,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Dimension
                  <span className="text-danger px-1">*</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="dimension"
                  defaultValue={this.state.dimension}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "dimension",
                    this.state.dimension,
                    "required"
                  )}
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="fuel_type">
                  Fuel Type<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="fuel_type"
                  id="fuel_type"
                  value={this.state.fuel_type}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Biofuel">Biofuel</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "fuel_type",
                  this.state.fuel_type,
                  "required"
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="warrenty_type">
                  Air Conditioning<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="ac"
                  id="ac"
                  value={this.state.ac}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="None">None</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message("ac", this.state.ac, "required")}
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="warrenty_type">
                  Driver Seat Adjustment
                  <span className="text-danger px-1">*</span>
                </label>
                <select
                  name="driver_seat_adjustment"
                  id="driver_seat_adjustment"
                  value={this.state.driver_seat_adjustment}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="None">None</option>
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "driver_seat_adjustment",
                  this.state.driver_seat_adjustment,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>
                  Weight<span className="text-danger px-1">*</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  defaultValue={this.state.weight}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />

                <div className="text-danger my-2">
                  {this.validator.message(
                    "weight",
                    this.state.weight,
                    "required"
                  )}
                </div>
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
                  value={this.state.tax_status}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="Cleared">Cleared</option>
                  <option value="Remaining">Remaining</option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "warrenty_type",
                  this.state.warrenty_type,
                  "required"
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="warrenty_type">
                  Warrenty Type<span className="text-danger px-1">*</span>
                </label>
                <select
                  name="warrenty_type"
                  id="warrenty_type"
                  value={this.state.warrenty_type}
                  onChange={this.handleChange}
                  className="form-control form-control-lg "
                >
                  <option value="No Warrenty">No Warrenty</option>
                  <option value="Dealer/Shop">Dealer/Shop</option>
                  <option value="Manufacturer/Importer">
                    Manufacturer/Importer
                  </option>
                </select>
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "warrenty_type",
                  this.state.warrenty_type,
                  "required"
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Warrenty Period (Optional)</label>
                <input
                  type="number"
                  name="warrenty_period"
                  defaultValue={this.state.warrenty_period}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Warrenty Includes( Optional)</label>
                <input
                  type="text"
                  name="warrenty_includes"
                  defaultValue={this.state.warrenty_includes}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                />
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
                  defaultValue={this.state.ward_no}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  id="ward_no"
                  name="ward_no"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "ward_no",
                  this.state.ward_no,
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
                  defaultValue={this.state.zipcode}
                  className="form-control form-control-lg"
                  id="zipcode"
                  name="zipcode"
                />
              </div>
              <div className="text-danger my-2">
                {this.validator.message(
                  "zipcode",
                  this.state.zipcode,
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
                  name="power_window"
                  id="power_window"
                  checked={this.state.power_window}
                  onChange={this.handleChange}
                />
                <label htmlFor="power_window">Power Window</label>
              </div>
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="power_steering"
              id="power_steering"
              checked={this.state.power_steering}
              onChange={this.handleChange}
            />
            <label htmlFor="power_steering">Power Steering</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="central_lock"
              name="central_lock"
              checked={this.state.central_lock}
              onChange={this.handleChange}
            />
            <label htmlFor="central_lock">Central Lock</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="keyless_remote_entry"
              name="keyless_remote_entry"
              checked={this.state.keyless_remote_entry}
              onChange={this.handleChange}
            />
            <label htmlFor="keyless_remote_entry">Keyless Remote Entry</label>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="tubeless_tyres"
              name="tubeless_tyres"
              checked={this.state.tubeless_tyres}
              onChange={this.handleChange}
            />
            <label htmlFor="tubeless_tyres">Tubeless Tyres</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="air_bags"
              name="air_bags"
              checked={this.state.air_bags}
              onChange={this.handleChange}
            />
            <label htmlFor="air_bags">Air Bags</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="anti_lock_braking"
              name="anti_lock_braking"
              checked={this.state.anti_lock_braking}
              onChange={this.handleChange}
            />
            <label htmlFor="anti_lock_braking">Anti Lock Braking</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="steering_mounted_controls"
              name="steering_mounted_controls"
              checked={this.state.steering_mounted_controls}
              onChange={this.handleChange}
            />
            <label htmlFor="steering_mounted_controls">
              Steering Mounted Controls
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="electric_side_mirror"
              name="electric_side_mirror"
              checked={this.state.electric_side_mirror}
              onChange={this.handleChange}
            />
            <label htmlFor="electric_side_mirror">Electric Side Mirrors</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="child_safety_lock"
              name="child_safety_lock"
              checked={this.state.child_safety_lock}
              onChange={this.handleChange}
            />
            <label htmlFor="child_safety_lock">Child Safety Lock</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="passenger_seat_adjustment"
              name="passenger_seat_adjustment"
              checked={this.state.passenger_seat_adjustment}
              onChange={this.handleChange}
            />
            <label htmlFor="passenger_seat_adjustment">
              Passenger Seat Adjustment
            </label>
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
            <h3 className="subheadline">
              Vehicle Documents<span className="text-danger px-1">*</span>
            </h3>
            <small>
              You can upload 10 documents.You have{" "}
              {10 - this.state.documents.length} uploads remaining. The file
              must be either JPG or PNG.
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
                      Click here or drop a image to upload!
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

        {this.state.error ? (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {this.state.errorMessage}
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
      </div>
    );
  }
}
