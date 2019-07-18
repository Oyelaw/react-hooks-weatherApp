import React from "react";
import { CTX } from "./Store";

// Helper function to check if object is empty
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function DisplayWeather({
  location,
  condition,
  humidity,
  description,
  pressure,
  temperature
}) {
  return (
    <ul className="weather-list">
      <li>Location: {location}</li>
      <li>Temperature: {temperature}</li>
      <li>Humidity: {humidity}</li>
      <li>Pressure: {pressure}</li>
      <li>Condition: {condition}</li>
      <li>Description: {description}</li>
    </ul>
  );
}

function Weather() {
  const [weatherState] = React.useContext(CTX);

  const display = isEmpty(weatherState);

  console.log(display);

  return display ? (
    ""
  ) : (
    <DisplayWeather
      location={weatherState.location}
      temperature={weatherState.temperature}
      humidity={weatherState.humidity}
      pressure={weatherState.pressure}
      condition={weatherState.condition}
      description={weatherState.description}
    />
  );
}

export default Weather;
