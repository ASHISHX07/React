import { React, useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [name, setName] = useState(
    localStorage.getItem('username') ?
    localStorage.getItem('username') : ''
  );

  useEffect(() => {
    localStorage.setItem('username', name)
  }, [name])

  return (
    <>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
      <h2>Hello, {name}!</h2>
    </>
  )
}

export default App
