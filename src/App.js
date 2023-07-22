// App.js
import React, { useState, useEffect } from 'react';
import logo from './Assets/logo.svg';
import './Styles/App.css';
import './Styles/Logo.css';
import './Styles/Spinner.css';
import Spinner from './Components/Spinner.js';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {loading ? <Spinner /> : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
