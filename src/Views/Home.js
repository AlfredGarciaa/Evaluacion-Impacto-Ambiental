import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../Components/Home.jsx';

const Home = () => {
  const routes = [
    { path: '/information', label: 'Information' },
    { path: '/context', label: 'Context' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div>
      <Slideshow />
      {routes.map((route) => (
        <React.Fragment key={route.path}>
          <Link to={route.path}>Go to {route.label}</Link>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
