import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <h1>🚀 Welcome to My Dumb App!</h1>
        <p className="subtitle">This is part of my 7-day MERN + AI internship 😎</p>

        <button onClick={() => setCount(count + 1)}>
          🔄 You clicked me {count} times
        </button>

        <p className="note">Click the button and watch the magic happen ✨</p>

        <footer>
          <p>Made with 💙 using React + Vite</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
