import React from "react";
import FormattedDate from "./FormattedDate";

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
      <div className="row">
        <div className="col-6">
          <div>
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div>
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
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