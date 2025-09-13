import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Missed() {
  return (
    <h2>Missed!</h2>
  )
}

function Goal() {
  return (
    <h2>Goal!</h2>
  )
}

function Football(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <Goal /> : <Missed />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Football isGoal={false} />
);