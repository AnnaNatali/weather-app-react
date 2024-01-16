import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <br />
      <br />
      <div className="row">
        <div className="col">
          <div className="WFDay"> Sun</div>
          <WeatherIcon code="01d" size={31} />
          <div className="WFTemp">
            <span className="WFTemp-max">19</span>
            <span className="WFTemp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
