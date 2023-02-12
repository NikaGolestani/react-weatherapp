import React, { useState } from "react";
import axios from "axios";
import Emoji from "./Emoji";
import DateElement from "./DateElement";
export default function Today(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  if (props.city !== weatherData.oldProps) {
    search();
  }
  function search() {
    const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      oldProps: props.city,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="todaydiv">
        <div className="today">
          <h1 className="p-0 m-0" id="city">
            {weatherData.city}
          </h1>
          <h4 className="p-0 m-0 text-secondary " id="date">
            <DateElement date={weatherData.date} />
          </h4>
          <h4 className="p-0 text-secondary wvalue">
            {weatherData.description}
          </h4>
          <div className="degreec">
            <span className="num">
              <span className="int">{Math.round(weatherData.temperature)}</span>
              °
            </span>
            <span className=" d-block text-secondary text-center self-align-end p-2"></span>
          </div>
          <span id="emoji">
            <Emoji code={weatherData.icon} />
          </span>
          <span className=" d-block text-secondary text-center self-align-end p-2"></span>
        </div>
        <br />
        <div className="text-secondary today details">
          Wind: {weatherData.wind} km/h
          <Emoji code="wind-day" size={20} />
          <br />
          Humidity: {weatherData.humidity}%
        </div>
      </div>
    );
  } else {
    return (
      <div className="todaydiv">
        <div className="today">Loading...</div>
        <br />
        <div className="text-secondary today details">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}
