import React from "react";

class SpeechControl extends React.Component {
  constructor(props) {
    super(props);
  }

  morningGreeting() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Good morning, Today's date is" + this.props.date;
    console.log(speechSynthesis.getVoices());
    function toggle(startOver = true) {
      speechSynthesis.cancel();
      if (startOver) {
        speechSynthesis.speak(msg);
      }
    }
    toggle();
  }

  componentWillMount() {
    this.morningGreeting();
  }

  componentDidMount() {
    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector("#speak");
    const stopButton = document.querySelector("#stop");
    msg.text = "Hi there";

    function populateVoices() {
      voices = this.getVoices();
      voicesDropdown.innerHTML = voices
        .filter(voice => voice.name.includes("Google"))
        .filter(voice => voice.lang.includes("en"))
        .map(
          voice =>
            `<option value="${voice.name}">${voice.name} (${
              voice.lang
            })</option>`
        )
        .join("");
    }

    function setVoice() {
      msg.voice = voices.find(voice => voice.name === this.value);
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
