import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import SpeechControl from "./components/SpeechControl";
import Login from "./components/Login";
import moment from "moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      selectedArticle: null,
      today: moment().format("MMMM Do YYYY")
    };
  }

  componentWillMount() {
    console.log("App mounted");
    let promise = this.fetchArticles();
    promise.then(response => {
      let data = JSON.parse(response);
      console.table(data.articles);
      this.setState({
        articleList: data.articles
      });
    });
    this.fetchArticles();
  }

  selectArticle = post => {
    this.setState({
      selectedArticle: { post }
    });
    console.log(post.title);
  };

  fetchArticles() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      let url =
        "https://newsapi.org/v2/top-headlines?" +
        "sources=bbc-news&" +
        "apiKey=559746f8cabf46d290a2553dcb04eaa5";
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
        <Header date={this.state.today} />
        <SpeechControl date={this.state.today} />
        <div className="main-container">
          <ArticleList
            selectArticle={this.selectArticle}
            list={this.state.articleList}
          />
          <ArticleDetail articleToDisplay={this.state.selectedArticle} />
        </div>
      </div>
    );
  }
}

export default App;
