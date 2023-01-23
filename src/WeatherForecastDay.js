import React from "react";
import Weathericon from "./Weathericon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherforecast-day">{day()}</div>
      <Weathericon code={props.data.weather[0].icon} size={36} />
      <div className="weatherforecast-temperatures">
        <span className="weatherforecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="weatherforecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
