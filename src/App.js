import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import ArticleList from "./components/ArticleList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;
