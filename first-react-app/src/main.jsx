import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Car(props) {
    return (
        <>
            <h2>
                <h2>I am a {props.brand}!</h2>
            </h2>
        </>
    );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <Garage />
);
