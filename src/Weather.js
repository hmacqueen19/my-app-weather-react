import React, { useState } from "react";
import "./styles.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import BlanketInformation from "./BlanketInformation";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    // console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      temperatureMax: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      humidity: response.data.main.humidity,
      precipitation: 15,
      icon: response.data.weather[0].icon,
      iconDescription: "",
    });
  }
  function search() {
    const apiKey = "6235b58538eef339ac44773d06f22df9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    // search for a city
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <h1>The Crocheter's Almanac</h1>
          <div className="weather-app-wrapper">
            <div className="row">
              <form onSubmit={handleSubmit} id="search-form">
                <div className="row">
                  <div className="col-9">
                    <input
                      id="location-bar"
                      className="location-bar"
                      type="text"
                      placeholder="Enter your location"
                      onChange={handleCityChange}
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
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
              <BlanketInformation
                dailyHighTemperature={weatherData.temperatureMax}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
