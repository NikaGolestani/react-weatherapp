import React from "react";
import Day from "./Day";

export default function Weekdays(props) {
  return (
    <div className="d-flex flex-wrap col-sm-8 mt-5 justify-content-center align-self-center">
      <Day value="Wednesday" maxMin="15/25" />
      <Day value="Thursday" maxMin="15/25" />
      <Day value="Friday" maxMin="15/25" />
      <Day value="Saturday" maxMin="15/25" />
      <Day value="Sunday" maxMin="15/25" />
    </div>
  );
}
