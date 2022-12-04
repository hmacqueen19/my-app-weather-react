import React, { useState } from "react";
import "./styles.css";
import "./Weather.css";
import "./BlanketInformation.css";
import FormattedDate from "./FormattedDate";
import BlanketInformation from "./BlanketInformation";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      precipitation: 15,
      icon: "",
      iconDescription: "",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <h1>The Crocheter's Almanac</h1>
          <div className="weather-app-wrapper">
            <div className="row">
              <form id="search-form">
                <div className="row">
                  <div className="col-6">
                    <input
                      id="location-bar"
                      className="location-bar"
                      type="text"
                      placeholder="Enter your location"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      id="search-button"
                      className="search-button shadow"
                      type="submit"
                      value="Search"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      id="submit-button"
                      className="current-location shadow"
                      type="submit"
                      value="Current Location"
                    />
                  </div>
                </div>
              </form>
              <div className="col-12">
                <div className="card current-weather">
                  <div className="overview">
                    <h2 id="current-location" className="card-title"></h2>
                    <ul>
                      <li id="last-updated">
                        <span id="current-date">
                          <FormattedDate date={weatherData.date} />
                        </span>
                      </li>
                      <li id="description">{weatherData.description}</li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="clearfix weather-temperature">
                        <img
                          src={weatherData.icon}
                          alt={weatherData.iconDescription}
                          id="icon"
                        />
                        <div id="temperature-information">
                          <strong id="temperature-current">
                            {weatherData.temperature}
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
                          <span id="precipitation">
                            {weatherData.precipitation}%
                          </span>
                        </li>
                        <li>
                          Humidity:{" "}
                          <span id="humidity">{weatherData.humidity}%</span>
                        </li>
                        <li>
                          Wind: <span id="wind">{weatherData.wind}km/h</span>
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
            </div>
            <p>
              <a
                href="https://github.com/hmacqueen19/my-app-weather-react"
                alt="GitHub link"
              >
                Open-source code
              </a>{" "}
              by Helen Macqueen
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6235b58538eef339ac44773d06f22df9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
