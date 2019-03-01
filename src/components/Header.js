import React from "react";
import logo from "../logo.svg";
import DateTime from "./DateTime";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Text-to-Speech
      <DateTime />
    </header>
  );
}

export default Header;
