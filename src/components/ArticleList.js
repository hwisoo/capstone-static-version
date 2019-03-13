import React from "react";
import Article from "./Article";

function ArticleList(props) {
  let items = [];
  if (props.list) {
    props.list.map((article, i) => items.push(article));
  }
  const keywordRef = React.createRef();

  const newsReport = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Fetching the news ";

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

  const handleKeywordSearch = () => {
    let search = keywordRef.current.value;
    if (search === "") {
      search = "news";
    }
    props.onKeyWordSearch(search);
  };

  return (
    <div>
      <h2>Articles List</h2>
      <form>
        <input
          ref={keywordRef}
          className="form-group"
          type="text"
          placeholder="Keyword"
          required
        />
      </form>
      <button
        onClick={() => {
          newsReport();
          props.setArticlesStatus();
          handleKeywordSearch();
        }}
        className="btn-lg btn-dark newsButton"
      >
        Fetch News
      </button>
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
        <span />
      )}
    </div>
  );
}

export default ArticleList;
