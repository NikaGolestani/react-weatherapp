import React from "react";
import Emoji from "./Emoji";

export default function Footer(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className=" weekdiv d-flex flex-column ">
      <span className="day">{days[props.day.getDay()]}</span>
      <div className="emoji">
        <Emoji code={props.icon} size={40} night={props.night} />
      </div>
      <span className="secondary littletext">
        {Math.round(props.max)}/{Math.round(props.min)}
      </span>
    </div>
  );
}
