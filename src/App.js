import "./styles.css";
import "./App.css";
import "./Form.css";
import "./CurrentWeather.css";
import "./BlanketInformation.css";
import BlanketInformation from "./BlanketInformation";
import CurrentWeather from "./CurrentWeather.js";
import Form from "./Form.js";
//import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>The Crocheter's Almanac</h1>
        <div className="weather-app-wrapper">
          <Form />
          <div className="row">
            <div className="col-12">
              <CurrentWeather />
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
