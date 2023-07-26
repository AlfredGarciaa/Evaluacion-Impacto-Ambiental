// App.jsx
import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import Spinner from './Components/Spinner.jsx';
import Marca from './Components/Marca.jsx';
import Logo from './Components/Logo.jsx';
import { Link } from 'react-router-dom';
import SpriteAnimations from './game.jsx';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      {isLoading && <Spinner loading={isLoading} />}
      <Marca loading={isLoading} />
      <Logo loading={isLoading} />

      {!isLoading ? (
        <>
          <Link to="/home" className="go-to-home-button">
            Go to Home
          </Link>
          <SpriteAnimations />
        </>
      ) : (
        <p className="open-source-text">Open Source</p>
      )}
    </div>
  );
}

export default App;
