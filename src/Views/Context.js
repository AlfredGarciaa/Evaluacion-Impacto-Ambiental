import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/About.css';
import image from '../Assets/c1.png';

const Context = () => {
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

<div className="image-container" style={{ position: "relative" }}>
  <img src={image} alt="Marca" className="logo" />
  <div
    className="image-text"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(255, 255, 255, 0.8)",
      padding: "10px",
      borderRadius: "5px",
    }}
  >
    Aquí va tu texto
  </div>
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

export default Context;
