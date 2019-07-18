import React from "react";
import { CTX } from "./Store";

function ProcessfetchedData(fetchedData) {
  const { main, name, sys, weather } = fetchedData;

  const processedObject = {
    location: `${name}, ${sys.country}`,
    temperature: `${main.temp}`,
    humidity: `${main.humidity}`,
    pressure: `${main.pressure}`,
    condition: `${weather[0].main}`,
    description: `${weather[0].description}`
  };

  console.log("Processed", processedObject);

  return processedObject;
}

export default function Form() {
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [weatherState, updateWeatherState] = React.useContext(CTX);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!city || !country) {
      return;
    }

    const api_key = "fbb3d87810d2a0b9fd388c1d1414f5db";
    const currentWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}&unit=metric`
    );

    const fetchedData = await currentWeather.json();
    const proccessedData = ProcessfetchedData(fetchedData);
    updateWeatherState(proccessedData);
  };
  return (
    <form>
      <div className="form">
        <input
          type="text"
          name="city"
          placeholder="city..."
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          name="country"
          placeholder="country..."
          onChange={e => setCountry(e.target.value)}
        />
        <button onClick={handleSubmit}>Get Weather</button>
      </div>
    </form>
  );
}
