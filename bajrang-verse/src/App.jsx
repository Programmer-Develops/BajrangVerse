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
        {/* division for chat bot area in which there will be text box of user and send button aside in a box. */}
        <div className="chat-box">
          <div className="chat-area">
            {/* <div className="chat-msg">
              <div className="msg">
                <p>Hi! I am Bajrang, your personal assistant. How can I help you today?</p>
              </div>
            </div> */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
