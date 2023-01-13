import React from "react";
import "./Weather.css";
import App from "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="Search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary searchButton w-100"
          />
        </div>
      </form>
      <h1>New York, NY, USA</h1>
      <ul>
        <li>Friday 11:09 </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partlycloudy"
            />
          </div>
          <div>
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
