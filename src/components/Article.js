import React from "react";

function Article(props) {
  const newsTitle = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = props.current.title;

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
      <h5
        className="articleTitle"
        onClick={() => {
          props.selectArticle(props.current);
          newsTitle();
        }}
      >
        {props.current.title}
      </h5>
    </div>
  );
}

export default Article;
