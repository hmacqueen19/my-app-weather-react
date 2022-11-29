import React from "react";
import "./CurrentWeather.css";
export default function CurrentWeather() {
  return (
    <div className="card current-weather">
      <div className="overview">
        <h2 id="current-location" className="card-title"></h2>
        <ul>
          <li id="last-updated">
            Last updated: <span id="current-date"></span>
          </li>
          <li id="description"></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="clear" id="icon" />
            <div id="temperature-information">
              <strong id="temperature-current"></strong>
              <span className="units">
                <a href="#bar" id="fahrenheit" className="active">
                  {" "}
                  °F{" "}
                </a>{" "}
                |
                <a href="#foo" id="celsius">
                  °C
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6" id="humidity-wind">
          <ul>
            <li>
              Humidity: <span id="humidity">%</span>
            </li>
            <li>
              Wind: <span id="wind"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
