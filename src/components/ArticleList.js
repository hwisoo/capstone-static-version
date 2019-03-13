import React from "react";
import Article from "./Article";

function ArticleList(props) {
  let items = [];
  if (props.list) {
    props.list.map((article, i) => items.push(article));
  }

  const newsReport = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Here's the recent news ";

    function toggle(startOver = true) {
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }
    toggle();
  };

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
            newsReport();
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
