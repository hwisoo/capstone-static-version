import React from "react";
const API_KEY = "21338c2f2a104e28a7a2fcfc5413b588";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Seattle",
      weather: {},
      weatherDetails: {}
    };
  }
  // componentWillMount() {
  //   this.fetchWeather();
  //   this.handleWeatherData();
  // }

  fetchWeather() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();

      let url =
        `https://api.weatherbit.io/v2.0/current?city=${
          this.state.location
        }&key=` + API_KEY;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  handleWeatherData() {
    let promise = this.fetchWeather();
    promise.then(response => {
      let data = JSON.parse(response);
      console.table(data.data[0]);
      this.setState({
        weather: data.data[0]
      });
      this.setState({
        weatherDetails: data.data[0].weather
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          Weather: {this.state.weatherDetails.description}
          <img
            className="weatherIcon"
            src={`https://www.weatherbit.io/static/img/icons/${
              this.state.weatherDetails.icon
            }.png`}
          />
        </p>

        <p>Temperature: {(this.state.weather.temp * 9) / 5 + 32} °F</p>
        <p>Feels like: {(this.state.weather.app_temp * 9) / 5 + 32}°F</p>
        <p>Wind Speed: {this.state.weather.wind_spd} mph</p>
        <h4>
          Location: {this.state.weather.city_name},{" "}
          {this.state.weather.state_code}{" "}
        </h4>
      </div>
    );
  }
}
