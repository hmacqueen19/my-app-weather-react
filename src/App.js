import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.delac.io/" target="_blank">
            Helen Macqueen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/hmacqueen19/my-app-weather-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://astounding-lebkuchen-2be8bb.netlify.app"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
