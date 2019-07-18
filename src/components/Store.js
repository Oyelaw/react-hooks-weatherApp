import React from "react";

const CTX = React.createContext();

export { CTX };

export default function WeatherStore(props) {
  const weatherStateHook = React.useState({});

  return <CTX.Provider value={weatherStateHook}>{props.children}</CTX.Provider>;
}
