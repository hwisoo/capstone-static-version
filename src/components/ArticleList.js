import React from "react";
import Article from "./Article";
function ArticleList(props) {
  let items = [];
  if (props.list) {
    props.list.map((article, i) => items.push(article));
  }

  return (
    <div>
      <h2>Articles List</h2>
      {props.articlesFetched ? (
        <ul>
          {items.map((item, i) => (
            <Article
              selectArticle={props.selectArticle}
              key={i}
              current={item}
            />
          ))}
        </ul>
      ) : (
        <button
          onClick={() => {
            props.setArticlesStatus();
          }}
          className="btn-lg btn-dark"
        >
          Fetch News
        </button>
      )}
    </div>
  );
}

export default ArticleList;
