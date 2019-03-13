import React from "react";

function ArticleDetail(props) {
  const newsDetail = event => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = event.target.textContent;

    function toggle(startOver = true) {
      let myVoices = speechSynthesis.getVoices();
      let myVoice = myVoices[50];
      msg.voice = myVoice;
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }
    toggle();
  };

  const newTab = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Fetching the full article.";

    function toggle(startOver = true) {
      let myVoices = speechSynthesis.getVoices();
      let myVoice = myVoices[50];
      msg.voice = myVoice;
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }
    toggle();
  };

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
        <h3 onClick={event => newsDetail(event)}>
          {props.articleToDisplay.post.title}
        </h3>
        <h4 onClick={event => newsDetail(event)}>
          {props.articleToDisplay.post.description}
        </h4>
        <a
          onClick={newTab}
          href={props.articleToDisplay.post.url}
          target="_blank"
        >
          {props.articleToDisplay.post.url}
        </a>
        <br />
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
