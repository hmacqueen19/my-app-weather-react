import "./styles.css";
import "./App.css";
import "./BlanketInformation.css";
import BlanketInformation from "./BlanketInformation";

//import axios from "axios";

export default function App() {
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
                        Precipitation: <span id="precipitation">%</span>
                      </li>
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
}
