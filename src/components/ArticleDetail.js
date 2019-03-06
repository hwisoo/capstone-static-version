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
        <h3>
          {props.articleToDisplay.post.author}:{" "}
          {props.articleToDisplay.post.title}
        </h3>
        <h4>{props.articleToDisplay.post.description}</h4>
        <a href={props.articleToDisplay.post.url} target="_blank">
          {props.articleToDisplay.post.url}
        </a>
        <img
          className="articleImg"
          src={props.articleToDisplay.post.urlToImage}
          alt={props.articleToDisplay.post.title}
        />
      </div>
    );
  }
}

export default ArticleDetail;
