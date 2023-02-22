import React, { useState } from "react";
import Emoji from "./Emoji";
import "./App.scss";
import Weekdays from "./Weekdays";
import Today from "./Today";
import Footer from "./Footer";
import "./App.scss";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("Istanbul");
  const [nightmod, setNightmod] = useState("clear-sky-night");
  const [cityT, setCityT] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    setCity(cityT);
  }
  function handleCurrent(position) {
    navigator.geolocation.getCurrentPosition(gpsCity);
  }
  function gpsCity(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiKey = "fb1a5abb4bafod018947tcd1dd70f5c3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleGps);
  }
  function handleGps(response) {
    setCity(response.data.city);
  }
  function changemod() {
    if (nightmod === "clear-sky-day") {
      setNightmod("clear-sky-night");
    } else {
      setNightmod("clear-sky-day");
    }
  }
  function handleCityChange(event) {
    setCityT(event.target.value);
  }
  return (
    <div className={nightmod}>
      <div className="main ">
        <div className=" border navbar  d-flex justify-content-between">
          <div className="changemod">
            <span id="changemod" onClick={changemod}>
              <Emoji code={nightmod} size={20} night={nightmod} />
            </span>
          </div>
          <div>Weather App</div>
          <div />
        </div>
        <form className="d-flex m-2" id="search-form" onSubmit={handleSubmit}>
          <div className=" d-flex flex-no-wrap col-9 mr-5">
            <input
              onChange={handleCityChange}
              type="search"
              className="searchbar "
              placeholder="Enter a city"
            />

            <input
              type="submit"
              value="Search"
              className="searchbutton rounded-pill"
            />
          </div>
          <input
            type="button"
            onClick={handleCurrent}
            value="Current"
            className="col-3 rounded-pill currentbutton"
          />
        </form>

        <div>
          <div className="row ms-1 p-0 ">
            <div className="col-sm-3 p-1 m-1 ">
              <Today city={city} night={nightmod} />
            </div>
            <Weekdays city={city} night={nightmod} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
