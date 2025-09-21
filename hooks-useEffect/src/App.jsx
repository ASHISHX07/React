import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ashish");

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1)
    }, 2000)
  }, [count, name])

  return (
    <>
      <h1>I've renderd {count} times!</h1>
    </>
  )
}

export default App
