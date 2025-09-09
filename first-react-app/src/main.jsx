import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Ashish</td>
    </tr>
    <tr>
      <td>Kinjal</td>
    </tr>
  </table>
)

createRoot(document.getElementById('ash')).render(
  myElement
)
