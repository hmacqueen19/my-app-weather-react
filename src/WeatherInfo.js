import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
import "./BlanketInformation.css";
import "./styles.css";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="col-12">
      <div className="card current-weather">
        <div className="overview">
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
              <span className="float-left" id="icon">
                <WeatherIcon code={props.data.icon} size={70} />
              </span>
              <div id="temperature-information">
                <span className="units">
                  <strong>
                    <WeatherTemperature fahrenheit={props.data.temperature} />
                  </strong>
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
    </div>
  );
}
