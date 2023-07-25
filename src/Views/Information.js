import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import '../Styles/About.css';
import '../Styles/Videos.css';

const Information = () => {
  const location = useLocation();

  const routes = [
    { path: '/home', label: 'Home', icon: <i className="fas fa-home button-icon"></i> },
    { path: '/information', label: 'Information', icon: <i className="fas fa-info-circle"></i> },
    { path: '/context', label: 'Context', icon: <i className="fas fa-book"></i> },
    { path: '/about', label: 'About', icon: <i className="fas fa-users"></i> },
  ];

  const buttonStyle = (isActive) => ({
    backgroundColor: isActive ? '#ff8000' : '#cbe5ef',
    color: isActive ? '#ffffff' : '#000000',
  });

  return (
    <div>

      <div className="video-container">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=5dXcK6ruGnc'
          controls
        />
      </div>

      <div className="button-bar">
        {routes.map((route, index) => {
          const isActive = location.pathname === route.path;

          return (
            <React.Fragment key={index}>
              <Link to={route.path} style={buttonStyle(isActive)}>
                {route.label}
                {route.icon}
              </Link>
              <br />
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
};

export default Information;
