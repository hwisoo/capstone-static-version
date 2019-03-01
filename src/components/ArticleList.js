import React from "react";
import articles from "../data/articles";
function ArticleList() {
  return (
    <div>
      {articles.map((article, i) => {
        return <div>{article.title}</div>;
      })}
    </div>
  );
}

export default ArticleList;
