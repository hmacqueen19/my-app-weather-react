import React from "react";
import "./Form.css";
export default function Form() {
  return (
    <div className="form-wrapper">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              id="location-bar"
              className="location-bar"
              type="text"
              placeholder="Enter your location"
            />
          </div>
          <div className="col-3">
            <input
              id="search-button"
              className="search-button shadow"
              type="submit"
              value="Search"
            />
          </div>
          <div className="col-3">
            <input
              id="submit-button"
              className="current-location shadow"
              type="submit"
              value="Current Location"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
