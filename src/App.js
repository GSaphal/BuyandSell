import React, { Component } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import BlogsSingle from "./components/Blogs/BlogsSingle";

import RealEstateSingle from "./components/View/RealEstate/SingleView/SingleView";
import RealEstateList from "./components/View/RealEstate/List/RealEstate";
import RealEstateGrid from "./components/View/RealEstate/List/GridView";
import RealEstateAddListing from "./components/View/RealEstate/AddListing/AddListing";
import ReadEstateEditListing from "./components/View/RealEstate/EditListing/EditListing";

import CompanyList from "./components/View/Company/List/CompanyList";
import CompanySingle from "./components/View/Company/SingleView/SingleView";
import CompanyAddListing from "./components/View/Company/AddListing/AddListing";
import CompanyEditListing from "./components/View/Company/EditListing/EditListing";

import VehicleList from "./components/View/Vehicle/List/Vehicle";
import VehicleAddListing from "./components/View/Vehicle/AddListing/AddListing";
import VehicleSingle from "./components/View/Vehicle/SingleView/SingleView";
import VehcileEditListing from "./components/View/Vehicle/EditListing/EditListing";
import MyListing from "./components/View/MyListing/MyListing";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/my-listing" component={MyListing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs-single" component={BlogsSingle} />
          <Route
            exact
            path={"/realestate/view/:id"}
            component={RealEstateSingle}
          />
          <Route exact path="/realestate/list" component={RealEstateList} />
          <Route exact path="/realestate/grid" component={RealEstateList} />

          <Route
            exact
            path="/realestate/list/:category"
            component={RealEstateList}
          />

          <Route exact path="/realestate/grid" component={RealEstateGrid} />
          <Route
            exact
            path="/realestate/add"
            component={RealEstateAddListing}
          />
          <Route
            exact
            path="/realestate/edit/:id"
            component={ReadEstateEditListing}
          />
          <Route exact path="/company/add" component={CompanyAddListing} />
          <Route exact path="/company/list" component={CompanyList} />
          <Route exact path="/company/list/:category" component={CompanyList} />

          <Route exact path={"/company/view/:id"} component={CompanySingle} />
          <Route
            exact
            path="/company/edit/:id"
            component={CompanyEditListing}
          />
          <Route exact path="/vehicle/list" component={VehicleList} />
          <Route exact path="/vehicle/add" component={VehicleAddListing} />
          <Route exact path={"/vehicle/view/:id"} component={VehicleSingle} />
          <Route exact path="/vehicle/list/:category" component={VehicleList} />
          <Route
            exact
            path="/vehicle/edit/:id"
            component={VehcileEditListing}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
