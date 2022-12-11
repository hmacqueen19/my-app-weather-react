import React, { useState } from "react";
import "./BlanketInformation.css";
export default function BlanketInformation(props) {
  const [color, setColor] = useState();
  let yarnColors = [
    {
      color: "White",
      maxTemp: 24,
    },
    {
      color: "Vapor Gray",
      maxTemp: 33,
    },
    {
      color: "Smokey Green",
      maxTemp: 42,
    },
    {
      color: "Smokey Blue",
      maxTemp: 51,
    },
    {
      color: "Indigo",
      maxTemp: 60,
    },
    {
      color: "Jewel Blue",
      maxTemp: 69,
    },
    {
      color: "Gray Orchid",
      maxTemp: 78,
    },
    {
      color: "Blush Pink",
      maxTemp: 87,
    },
    {
      color: "Pomegranite",
      maxTemp: 96,
    },
    {
      color: "Soft Sunshine",
      maxTemp: 200,
    },
  ];

  function findColor(temperature) {
    // setColor(
    //   yarnColors.find((yarnColor) => {
    //     return temperature <= yarnColor.maxTemp;
    //   })
    // );
    for (let i = 0; i < yarnColors.length; i++) {
      if (temperature <= yarnColors[i].maxTemp) {
        setColor(yarnColors[i].color);
        return;
      }
    }
  }

  if (color) {
    return (
      <div className="card blanket-information">
        <div className="card-body">
          <h3 id="yarn-card-title">Bernat Velvet Yarn Color: </h3>
          <h5 id="yarn-color">{color}</h5>
        </div>
      </div>
    );
  } else {
    findColor(props.dailyHighTemperature);
  }
}
