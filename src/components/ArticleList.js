import React from "react";
import Article from "./Article";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentWillMount() {
    let newItems = [];
    if (this.props.list) {
      this.props.list.map((article, i) => newItems.push(article));
    }
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div>
        <h2>Articles List</h2>
        {this.props.articlesFetched ? (
          <ul>
            {this.state.items.map((item, i) => (
              <Article
                selectArticle={this.props.selectArticle}
                key={i}
                current={item}
              />
            ))}
          </ul>
        ) : (
          <button
            onClick={() => {
              this.props.setArticlesStatus();
            }}
            className="btn-lg btn-dark"
          >
            Fetch News
          </button>
        )}
      </div>
    );
  }
}

export default ArticleList;
