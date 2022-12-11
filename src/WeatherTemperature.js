import React from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </div>
  );
}
