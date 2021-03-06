import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default class Reader extends React.Component {
  componentDidMount() {
    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector("#speak");
    const stopButton = document.querySelector("#stop");
    msg.text = document.querySelector('[name="text"]').value;
    function populateVoices() {
      voices = this.getVoices();
      voicesDropdown.innerHTML = voices
        .filter(voice => voice.name.includes("Google"))
        // .filter(voice => voice.lang.includes("en"))
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
      <div>
        <form>
          <h2>Reader</h2>
          <div className="reader">
            <select
              className="form-group custom-select"
              name="voice"
              id="voices"
            >
              <option value="">Select A Voice</option>
            </select>

            <textarea className="form-group" rows="15" name="text" />
            <br />
          </div>
        </form>
        <button className="btn-dark btn-lg mr-4" id="stop">
          Stop
        </button>
        <button className="btn-dark btn-lg" id="speak">
          Read
        </button>
      </div>
    );
  }
}
