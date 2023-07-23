import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import Spinner from './Components/Spinner.jsx';
import Logo from './Components/Logo.jsx';
import Marca from './Components/Marca.jsx';

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
          <Logo />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </>
      ) : (
        <p className="open-source-text">Open Source</p>
      )}
    </div>
  );
}

export default App;
