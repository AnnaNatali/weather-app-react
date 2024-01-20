import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
