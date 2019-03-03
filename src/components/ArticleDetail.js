import React from "react";

function ArticleDetail(props) {
  if (props.articleToDisplay === null) {
    return (
      <div>
        <h2>Article detail</h2>
        <p>Please select article</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Article detail</h2>
        <h3>{props.articleToDisplay.post.title}</h3>
        <h4>{props.articleToDisplay.post.description}</h4>
        <p>{props.articleToDisplay.post.content}</p>
        <img src={props.articleToDisplay.post.urlToImage} />
      </div>
    );
  }
}

export default ArticleDetail;
