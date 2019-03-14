import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import Reader from "./components/Reader";
import SpeechControl from "./components/SpeechControl";
import moment from "moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const API_KEY = "21338c2f2a104e28a7a2fcfc5413b588";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //UI states
      weatherFetched: false,
      articlesFetched: false,
      todoListFetched: false,

      //weather
      location: "Seattle",
      weather: {},
      weatherDetails: {},

      // articles
      keyword: "",
      articleList: [],
      selectedArticle: null,
      today: moment().format("MMMM Do YYYY")
    };
    this.onKeyWordSearch = this.onKeyWordSearch.bind(this);
  }

  componentWillMount() {
    this.handleWeatherData();
  }

  setWeatherStatus = () => {
    this.setState({
      weatherFetched: true
    });
  };

  fetchWeather() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      let url =
        `https://api.weatherbit.io/v2.0/current?city=${
          this.state.location
        }&key=` + API_KEY;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  handleWeatherData() {
    let promise = this.fetchWeather();
    promise.then(response => {
      let data = JSON.parse(response);
      this.setState({
        weather: data.data[0]
      });
      this.setState({
        weatherDetails: data.data[0].weather
      });
    });
  }

  setArticlesStatus = () => {
    this.setState({
      articlesFetched: true
    });
  };

  selectArticle = post => {
    this.setState({
      selectedArticle: { post }
    });
    console.log(post.title);
  };

  fetchArticles(search) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      let url =
        "https://newsapi.org/v2/everything" +
        search +
        "&apiKey=559746f8cabf46d290a2553dcb04eaa5";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  onKeyWordSearch = keyword => {
    let promise = this.fetchArticles(keyword);
    promise.then(response => {
      let data = JSON.parse(response);
      console.table(data.articles);
      this.setState({
        articleList: data.articles
      });
    });
    this.fetchArticles();
  };

  render() {
    return (
      <div className="App">
        {/* <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/articles">articles</Link>
              </li>
            </ul>
          </div>
        </Router> */}
        <Header
          weatherFetched={this.state.weatherFetched}
          weather={this.state.weather}
          weatherDetails={this.state.weatherDetails}
          setWeatherStatus={this.setWeatherStatus}
          date={this.state.today}
        />
        <SpeechControl
          weatherFetched={this.state.weatherFetched}
          setWeatherStatus={this.setWeatherStatus}
          weather={this.state.weather}
          weatherDetails={this.state.weatherDetails}
          articlesFetched={this.state.articlesFetched}
          date={this.state.today}
        />
        <div className="main-container">
          <ArticleList
            onKeyWordSearch={this.onKeyWordSearch}
            setArticlesStatus={this.setArticlesStatus}
            articlesFetched={this.state.articlesFetched}
            selectArticle={this.selectArticle}
            list={this.state.articleList}
          />
          <ArticleDetail articleToDisplay={this.state.selectedArticle} />
          <Reader />
        </div>
      </div>
    );
  }
}

export default App;
