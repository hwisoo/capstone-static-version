import React from "react";
import Clock from "react-live-clock";

function DateTime(props) {
  const dateDetail = event => {
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
  return (
    <div>
      <h3 onClick={event => dateDetail(event)}>{props.date}</h3>
      <Clock
        onClick={event => dateDetail(event)}
        format={"dddd, h:mm:ss A"}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </div>
  );
}

export default DateTime;
