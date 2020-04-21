import React from "react";

export default function Weather(props) {
  const weatherReport = () => {
    const msg = new SpeechSynthesisUtterance();
    console.log(props.weather);
    let fahrenheit = ((props.weather.temp * 9) / 5 + 32).toFixed(2);
    msg.text =
      "The current weather in " +
      props.weather.city_name +
      " is " +
      props.weatherDetails.description +
      ". the current temperature outside is " +
      fahrenheit +
      " degrees fahrenheit.";

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

  const weatherDetail = event => {
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
      {props.weatherFetched ? (
        <div className="weatherDiv">
          <p onClick={event => weatherDetail(event)} className="small">
            Weather: {props.weatherDetails.description}
            <img
              className="weatherIcon"
              src={`https://www.weatherbit.io/static/img/icons/${
                props.weatherDetails.icon
              }.png`}
            />
          </p>
          <p onClick={event => weatherDetail(event)} className="small">
            Temperature: {((props.weather.temp * 9) / 5 + 32).toFixed(2)} °F
          </p>
          <p onClick={event => weatherDetail(event)} className="small">
            Feels like: {((props.weather.app_temp * 9) / 5 + 32).toFixed(2)}°F
          </p>
          <p onClick={event => weatherDetail(event)} className="small">
            Wind Speed: {props.weather.wind_spd} mph
          </p>
          <p onClick={event => weatherDetail(event)} className="small">
            Location: {props.weather.city_name}, {props.weather.state_code}{" "}
          </p>{" "}
        </div>
      ) : (
        <button
          onClick={() => {
            weatherReport();
            props.setWeatherStatus();
          }}
          className="btn-dark btn-lg"
        >
          Fetch Weather
        </button>
      )}
    </div>
  );
}
