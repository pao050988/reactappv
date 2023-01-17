import React, { useState } from "react";
import "./Weather.css";
import App from "./App.css";

import FormattedDate from "./FormattedDate";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https//ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div>
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div>
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `45c635f6554467de219d60506c6e3432`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
