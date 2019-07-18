import React from "react";
import "./App.css";

import Form from "./components/Form";
import Weather from "./components/Weather";
import WeatherStore from "./components/Store";
import Title from "./components/Title";

function App() {
  return (
    <div className="app">
      <WeatherStore>
        <Title />
        <div className="form-weather">
          <Form />
          <Weather />
        </div>
      </WeatherStore>
    </div>
  );
}

export default App;
