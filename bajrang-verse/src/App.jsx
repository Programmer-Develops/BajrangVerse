import { useState, useRef, useEffect } from 'react';
import BajrangV from './assets/Bajrang-Verse-logo.svg';
import './App.css';

// *TODO: Replace YOUR_OPENAI_API_KEY with my actual API key

function App() {
  const [messages,setMessages] = useState([
    {
      role: 'assistant',
      content:'Hi I am Bajrang, your personal assistant. How can I help you today?'
    }
  ]);
  const [inputValue,,setInputValue] = useState('')
  // const [messages, setMessages] = useState([
  //   { role: 'assistant', content: 'Hi! I am Bajrang, your personal assistant. How can I help you today?' }
  // ]);
  // const [inputValue, setInputValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const messagesEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  // const handleSendMessage = async () => {
  //   if (!inputValue.trim()) return;

  //   const userMessage = { role: 'user', content: inputValue };
  //   setMessages(prev => [...prev, userMessage]);
  //   setInputValue('');
  //   setIsLoading(true);

  //   try {
  //     // Replace with your actual API call
  //     const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer YOUR_OPENAI_API_KEY`
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         messages: [...messages, userMessage],
  //         temperature: 0.7
  //       })
  //     });

  //     const data = await response.json();
  //     const assistantMessage = data.choices[0].message;
  //     setMessages(prev => [...prev, assistantMessage]);
  //   } catch (error) {
  //     console.error('Error calling OpenAI API:', error);
  //     setMessages(prev => [...prev, { 
  //       role: 'assistant', 
  //       content: 'I am not available right now due to undergoing development. Please try again later.' 
  //     }]);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     handleSendMessage();
  //   }
  // };

  return (
    <div className="container">
      <div className="logo-div">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={BajrangV} className="logo" alt="Bajrang Verse logo" />
        </a>       
      </div>
      
      <div className="chat-box">
        <div className="chat-area">
          {messages.map((message, index) => (
            <div key={index} className={`chat-msg ${message.role}`}>
              <div className="msg">
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-msg assistant">
              <div className="msg">
                <p>Thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;