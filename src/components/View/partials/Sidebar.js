import React, { Component } from "react";
import { AddModal } from "../../partials/AddModal";
export default class AddListingSidebar extends Component {
  render() {
    return (
      <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
        <div id="sidebar" className="sidebar-left">
          <div className="sidebar_inner">
            <div className="list-group no-border list-unstyled">
              <span className="list-group-item heading">Manage Listings</span>
              <a
                className="nav-link nav-btn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <i className="fa fa-fw fa-plus-square-o" /> Add Listing
              </a>
              <AddModal />
              {/* <a
                href="my_bookmarked_listings.html"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="fa fa-fw fa-bookmark-o" /> Bookmarked Listing
                </span>
                <span className="badge badge-primary badge-pill">10</span>
              </a> */}
              <a
                href="user/my-listing"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="fa fa-fw fa-bars" /> My Listings
                </span>
                {/* <span className="badge badge-primary badge-pill">7</span> */}
              </a>
              {/* <span className="list-group-item heading">Manage Account</span>
              <a href="my_profile.html" className="list-group-item">
                <i className="fa fa-fw fa-pencil" /> My Profile
              </a>
              <a href="my_password.html" className="list-group-item">
                <i className="fa fa-fw fa-lock" /> Change Password
              </a>
              <a href="my_notifications.html" className="list-group-item">
                <i className="fa fa-fw fa-bell-o" /> Notifications
              </a>
              <a href="my_membership.html" className="list-group-item">
                <i className="fa fa-fw fa-cubes" /> Membership
              </a>
              <a href="my_payments.html" className="list-group-item">
                <i className="fa fa-fw fa-credit-card" /> Payments
              </a>
              <a href="my_account.html" className="list-group-item">
                <i className="fa fa-fw fa-cog" /> Account
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
