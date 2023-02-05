import React from "react";

export default function Footer(props) {
  return (
    <div className=" weekdiv ">
      <span className="day">{props.value}</span>
      <i className="fa-solid fa-cloud-rain emoji"></i>{" "}
      <span className="secondary littletext">{props.maxMin}</span>
    </div>
  );
}
