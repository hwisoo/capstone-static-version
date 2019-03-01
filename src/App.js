import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import articles from "./data/articles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: articles,
      selectedArticle: null
    };
  }

  componentWillMount() {
    console.log("App mounted");
    this.setState({
      articleList: { articles }
    });
    console.log(this.state);
  }

  // fetchArticles() {
  //   let newArticles = [];
  //   for (let article in articles) {
  //     newArticles.push({
  //       title: article.title
  //     });
  //   }
  // }
  onArticleSelect = () => {
    // this.setState({
    //   selectedArticle:
    // });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-container">
          <ArticleList list={this.state.articleList} />
          <ArticleDetail />
        </div>
      </div>
    );
  }
}

export default App;
