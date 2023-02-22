import React from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

export default function Emoji(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "shower-rain-day": "SLEET",
    "shower-rain-night": "SLEET",
    "wind-day": "WIND",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  if ((props.night === "clear-sky-night") & (props.code !== "clear-sky-day")) {
    return (
      <ReactAnimatedWeather
        color="#9df2ff"
        icon={codeMapping[props.code]}
        size={props.size}
        animate={true}
      />
    );
  } else {
    if (props.code !== "clear-sky-day") {
      return (
        <ReactAnimatedWeather
          color="#4d87e2"
          icon={codeMapping[props.code]}
          size={props.size}
          animate={true}
        />
      );
    } else {
      return (
        <ReactAnimatedWeather
          color="#ffd24c"
          icon={codeMapping[props.code]}
          size={props.size}
          animate={true}
        />
      );
    }
  }
}
