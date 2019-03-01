import React from "react";

function Article(props) {
  return (
    <div>
      <h3
        onClick={() => {
          props.selectArticle(props.current);
        }}
      >
        {props.current.title}
      </h3>
    </div>
  );
}

export default Article;
