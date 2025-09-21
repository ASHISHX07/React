import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const input = useRef()

  const btnClick = () => {
    console.log(input.current);
    input.current.style.background = "blue";
  }

  return (
    <>
      <input type="text" ref={input}/>
      <button onClick={btnClick}>Click Here</button>
    </>
  )
}

export default App
