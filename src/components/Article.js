import React from "react";

function Article(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.selectArticle(props.current);
        }}
      >
        {props.current.title}
      </h5>
    </div>
  );
}

export default Article;
