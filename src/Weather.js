import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="Search"
          placeholder="Enter a city.."
          className="form-control"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>New York, NY, USA</h1>
      <ul>
        <li>Friday 11:09 </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partlycloudy"
          />
          6°C
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
