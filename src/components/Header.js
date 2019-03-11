import React from "react";
import logo from "../logo.svg";
import DateTime from "./DateTime";
import Weather from "./Weather";
function Header(props) {
  return (
    <header className="App-header">
      <Weather />
      <div>
        <h1>
          {" "}
          <img src={logo} className="App-logo" alt="logo" />
          Daily Assistant{" "}
        </h1>
        <DateTime date={props.date} />
      </div>
      <div />
    </header>
  );
}

export default Header;
