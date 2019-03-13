import React from "react";

class SpeechControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArticleListexecuted: false
    };
  }

  initialGreeting = () => {
    const msg = new SpeechSynthesisUtterance();
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
    let customGreeting = hour < 12 ? "Good morning," : "Good afternoon,";
    msg.text = customGreeting + " Today is " + n + this.props.date + ".";

    function toggle(startOver = true) {
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }
    toggle();
  };

  componentWillMount() {
    this.initialGreeting();
  }

  componentDidMount() {
    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector("#speak");
    const stopButton = document.querySelector("#stop");
    msg.text = "Good morning, Today's date is";

    function populateVoices() {
      voices = this.getVoices();
      console.table(voices);
      voicesDropdown.innerHTML = voices
        .filter(voice => voice.name === "Google UK English Male")
        .filter(voice => voice.lang.includes("en"))
        .map(
          voice =>
            `<option value="${voice.name}">${voice.name} (${
              voice.lang
            })</option>`
        )
        .join("");
    }

    function setVoice(name) {
      msg.voice = voices.find(voice => voice.name === name);
      toggle();
    }

    function toggle(startOver = true) {
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }

    function setOption() {
      console.log(this.name, this.value);
      msg[this.name] = this.value;
      toggle();
    }

    speechSynthesis.addEventListener("voiceschanged", populateVoices);
    voicesDropdown.addEventListener("change", setVoice);
    options.forEach(option => option.addEventListener("change", setOption));
    speakButton.addEventListener("click", toggle);
    stopButton.addEventListener("click", () => toggle(false));
  }

  render() {
    return (
      <div className="voiceinator">
        <select name="voice" id="voices">
          <option value="">Select A Voice</option>
        </select>
        <button id="stop">Stop!</button>
        <button id="speak">Speak</button>
      </div>
    );
  }
}

export default SpeechControl;
