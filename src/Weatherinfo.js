import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <div>
                <Weathericon code={props.data.icon} size={65} />
              </div>
              <div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
