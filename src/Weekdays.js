import React, { useState } from "react";
import Day from "./Day";
import axios from "axios";
import ReactLoading from "react-loading";

export default function Weekdays(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  if (props.city !== weatherData.oldProps) {
    search();
  }
  function search() {
    const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    if (response.data.status !== "not_found") {
      setWeatherData({
        ready: true,
        valid: true,
        daily: response.data.daily,
        oldProps: props.city,
      });
    } else {
      setWeatherData({
        ready: true,
        valid: false,
        msg: response.data.message,
        oldProps: props.city,
      });
    }
  }
  if (weatherData.ready) {
    if (weatherData.valid) {
      return (
        <div className="d-flex flex-wrap col-sm-8 mt-5 justify-content-center align-self-center">
          {weatherData.daily.map(function (value, index) {
            return (
              <Day
                key={index}
                day={new Date(value.time * 1000)}
                icon={value.condition.icon}
                max={value.temperature.maximum}
                min={value.temperature.minimum}
                value={value}
                night={props.night}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-wrap col-sm-8 mt-5 justify-content-center align-self-center">
          {weatherData.msg}
        </div>
      );
    }
  } else {
    return (
      <div className="d-flex flex-wrap col-sm-8 mt-5 justify-content-center align-self-center">
        <ReactLoading
          type={"bars"}
          color={"#aaa"}
          height={"20%"}
          width={"20%"}
        />
      </div>
    );
  }
}
