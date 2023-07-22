import React from 'react';
import '../Styles/Logo.css';

const Logo = ({ loading }) => (
  <div className="main-container">
    <div className={`custom-loading-text ${loading ? 'show' : 'hide'}`}>
      {loading ? (
        <>
          <p>
            " La tierra proporciona lo suficiente para satisfacer las necesidades de cada hombre, pero no la codicia de cada hombre. "
          </p>
          <p>
            - Mahatma Gandhi
          </p>
        </>
      ) : null}
    </div>
  </div>
);

export default Logo;
