import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  useEffect(() => {
    console.log("Message from useEffect");
    
  }, [])

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
    
  }, [])

  return (
    <>
      <h2>Test Message</h2>
      {Array(40000).fill('').map((item, index) => (<li key={index}>{Math.pow(Math.random(), 10)}</li>))}
    </>
  )
}

export default App
