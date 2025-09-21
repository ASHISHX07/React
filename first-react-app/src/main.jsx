import { StrictMode, useState, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from 'react-dom';
import styles from './BlueHeader.module.css';
import { styled, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph {
    font-family: courier, monospace;
    color: blue;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome!</h1>
      <p className="myparagraph">This paragraph is styled with global styles.</p>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
