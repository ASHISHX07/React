import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Fruit() {
    let a = 4;
    return (<>
    <h1>{a < 6 ? "Apple" : "Banana"}</h1>
    </>);
}

createRoot(document.getElementById("root")).render(
    <>
        <Fruit />
    </>
);
