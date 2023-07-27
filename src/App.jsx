import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import Spinner from './Components/Spinner.jsx';
import Marca from './Components/Marca.jsx';
import Logo from './Components/Logo.jsx';
import { Link } from 'react-router-dom';
import SpriteAnimations from './game.jsx';

/* FIREBASE */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXRWDWpFsdlHQS2RH_sPgyAGAX-pJ8O1s",
  authDomain: "impacto-ambiental-168c9.firebaseapp.com",
  databaseURL: "https://impacto-ambiental-168c9-default-rtdb.firebaseio.com",
  projectId: "impacto-ambiental-168c9",
  storageBucket: "impacto-ambiental-168c9.appspot.com",
  messagingSenderId: "364671145286",
  appId: "1:364671145286:web:6b0f818cd257bc4c364147",
  measurementId: "G-S38VGN71EB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/* FIREBASE */

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
