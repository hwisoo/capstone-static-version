import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import DateTime from "./components/DateTime";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DateTime />
      </div>
    );
  }
}

export default App;
