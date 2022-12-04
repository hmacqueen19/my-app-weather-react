import React from "react";
import BlanketInformation from "./BlanketInformation";
import FormattedDate from "./FormattedDate";
import "./BlanketInformation.css";
import "./styles.css";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="col-12">
      <div className="card current-weather">
        <div className="overview">
          <h2 id="current-location" className="card-title"></h2>
          <ul>
            <li id="cityname">{props.data.city}</li>
            <li id="last-updated">
              <span id="current-date">
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <li id="description">{props.data.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={props.data.icon}
                alt={props.data.iconDescription}
                id="icon"
              />
              <div id="temperature-information">
                <strong id="temperature-current">
                  {props.data.temperature}
                </strong>
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
                Precipitation:{" "}
                <span id="precipitation">{props.data.precipitation}%</span>
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}%</span>
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
      <div className="col-12">
        <BlanketInformation />
      </div>
    </div>
  );
}
