import React from "react";
import Weathericon from "./Weathericon";
import "./weatherforecast.css"

export default function Weatherforecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="weatherforecast-day">Thu</div>
          <Weathericon code="03d" size={36} />
          <div className="weatherforecast-temperatures">
            <span className="weatherforecast-temperature-max">19°</span>
            <span className="weatherforecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
