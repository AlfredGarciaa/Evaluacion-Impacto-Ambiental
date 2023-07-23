import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Welcome to the About Page!</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default About;
