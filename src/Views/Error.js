import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Error.css";

const Error = () => {
  const links = [
    { path: '/home', label: 'Home' },
  ];

  return (
    <div className="error-container">
      <h1 className="error-title">404 - Page Not Found</h1>
      <p className="error-message">The requested page does not exist.</p>
      {links.map((link) => (
        <React.Fragment key={link.path}>
          <Link to={link.path} className="error-link">Go back to {link.label}</Link>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Error;
