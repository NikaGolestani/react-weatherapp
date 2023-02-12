import React, { useState } from "react";
//import axios from "axios";
import "./App.css";
import Weekdays from "./Weekdays";
import Today from "./Today";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState("Istanbul");
  const [cityT, setCityT] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    setCity(cityT);
  }

  function handleCityChange(event) {
    setCityT(event.target.value);
  }
  return (
    <div className="main">
      <div className=" border navbar">Weather App</div>
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
          value="Current"
          className="col-3 rounded-pill currentbutton"
        />
      </form>
      <div>
        <div className="row ms-1 p-0 ">
          <div className="col-sm-3 p-1 m-1 ">
            <Today city={city} />
          </div>
          <Weekdays city="istanbul" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
