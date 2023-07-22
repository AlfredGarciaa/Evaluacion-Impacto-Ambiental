import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import './Styles/Logo.css';
import Mostrar from './Components/SpinnerAndLogo.jsx';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      <Mostrar loading={loading} />
      {!loading && (

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      )}
    </div>
  );
}

export default App;
