import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const links = [
    { path: '/home', label: 'Home' },
  ];

  return (
    <div>
      <h1>Welcome to the About!</h1>
      {links.map((link) => (
        <React.Fragment key={link.path}>
          <Link to={link.path}>Go back to {link.label}</Link>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default About;
