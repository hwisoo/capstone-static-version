import React from "react";
import logo from "../logo.svg";
import DateTime from "./DateTime";
import Weather from "./Weather";
import Login from "./Login";

function Header(props) {
  return (
    <header className="App-header">
      <Weather
        weatherFetched={props.weatherFetched}
        weather={props.weather}
        weatherDetails={props.weatherDetails}
        setWeatherStatus={props.setWeatherStatus}
      />
      <div>
        <h1>
          {" "}
          <img src={logo} className="App-logo" alt="logo" />
          Daily Assistant{" "}
        </h1>
        <DateTime date={props.date} />
      </div>
      <Login />
    </header>
  );
}

export default Header;
