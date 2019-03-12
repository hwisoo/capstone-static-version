import React from "react";

export default function Weather(props) {
  return (
    <div>
      {props.weatherFetched ? (
        <div>
          <p className="small">
            Weather: {props.weatherDetails.description}
            <img
              className="weatherIcon"
              src={`https://www.weatherbit.io/static/img/icons/${
                props.weatherDetails.icon
              }.png`}
            />
          </p>
          <p className="small">
            Temperature: {(props.weather.temp * 9) / 5 + 32} °F
          </p>
          <p className="small">
            Feels like: {(props.weather.app_temp * 9) / 5 + 32}°F
          </p>
          <p className="small">Wind Speed: {props.weather.wind_spd} mph</p>
          <p className="small">
            Location: {props.weather.city_name}, {props.weather.state_code}{" "}
          </p>{" "}
        </div>
      ) : (
        <button
          onClick={() => {
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
