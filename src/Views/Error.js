import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  const links = [
    { path: '/home', label: 'Home' },
  ];

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
      {links.map((link) => (
        <React.Fragment key={link.path}>
          <Link to={link.path}>Go back to {link.label}</Link>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Error;
