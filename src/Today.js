import React from "react";
import Emoji from "./Emoji";

export default function Weekdays() {
  return (
    <div className="todaydiv">
      <div className="today">
        <h1 className="p-0 m-0" id="city"></h1>
        <h4 className="p-0 m-0 text-secondary " id="date">
          Tuesday 05:55
        </h4>
        <h4 className="p-0 text-secondary wvalue">Sunny</h4>
        <div className="degreec">
          <span className="num">
            <span className="int">55</span>°
          </span>
          <span className=" d-block text-secondary text-center self-align-end p-2">
            5°/55°
          </span>
        </div>
        <span id="emoji">
          <Emoji />
        </span>
        <span className=" d-block text-secondary text-center self-align-end p-2"></span>
      </div>
      <br />
      <div className="text-secondary today details">
        Wind: 5 km/h
        <br />
        Humidity: 55%
      </div>
    </div>
  );
}
