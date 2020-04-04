import React from "react";
import { Link } from "react-router-dom";
export const AddModal = () => {
  return (
    <div
      className="modal fade  bd-example-modal-lg"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header add-listing ">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <a href="/realestate/add">
                    <div className="card d-flex align-items-center justify-content-center add-category-realestate">
                      Add a Realestate
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/vehicle/add">
                    <div className="card d-flex align-items-center justify-content-center add-category-vehicle">
                      Add a Vehicle
                    </div>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <a href="/company/add">
                    <div className="card d-flex align-items-center justify-content-center add-category-company">
                      Add a Company
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="card d-flex align-items-center justify-content-center add-category-company">
                    Add a Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
