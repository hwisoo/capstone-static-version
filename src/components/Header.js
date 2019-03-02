import React from "react";
import logo from "../logo.svg";
import DateTime from "./DateTime";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Text-to-Speech App</h1>
      <DateTime />
    </header>
  );
}

export default Header;
