import React from "react";

export default function SpeechControl(props) {
  const initialGreeting = () => {
    let d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let hour = d.getHours();
    let n = weekday[d.getDay()];
    const msg = new SpeechSynthesisUtterance();

    let customGreeting = hour < 12 ? "Good morning," : "Good afternoon,";
    msg.text = customGreeting + " Today is " + n + props.date + ".";

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

  return <div />;
}
