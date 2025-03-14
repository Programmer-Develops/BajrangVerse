import { useState } from 'react'
import BajrangV from './assets/Bajrang-Verse-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class = "container">
        <div className="logo-div">
          <a href="" target="_blank">
            <img src={BajrangV} className="logo" alt="Bajrang Verse logo" />
          </a>       
        </div>
      </div>
    </>
  )
}

export default App
