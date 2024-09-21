import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomeScreen from "./screens/HomeScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>
);
