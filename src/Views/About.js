import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../Assets/Marca.png';
import '../Styles/About.css';
import '../Styles/Icons.css';

const About = () => {
  const location = useLocation();

  const routes = [
    { path: '/home', label: 'Home', icon: <i className="fas fa-home button-icon"></i> },
    { path: '/information', label: 'Information', icon: <i className="fas fa-info-circle"></i> },
    { path: '/context', label: 'Context', icon: <i className="fas fa-book"></i> },
    { path: '/about', label: 'About', icon: <i className="fas fa-users"></i> },
  ];

  const githubRepoURL = 'https://github.com/AlfredGarciaa/Evaluacion-Impacto-Ambiental.git';

  return (
    <div>

      <div className="image-container">
        <img src={image} alt="Marca" className="logo" />
        <div className="image-text">
          <strong>" La tierra proporciona lo suficiente para satisfacer las necesidades de cada hombre, pero no la codicia de cada hombre. "</strong>
          <br />
          - Mahatma Gandhi
        </div>
      </div>  

      <div className="button-bar">
        {routes.map((route, index) => {
          const isActive = location.pathname === route.path;
          const buttonStyle = {
            backgroundColor: isActive ? '#ff8000' : '#cbe5ef',
            color: isActive ? '#ffffff' : '#000000',
          };

          return (
            <React.Fragment key={index}>
              <Link to={route.path} style={buttonStyle}>
                {route.label}
                {route.icon}
              </Link>
              <br />
            </React.Fragment>
          );
        })}
      </div>

      <div className="body1">
        <div className="main1">
          <a href={githubRepoURL} target="_blank" rel="noopener noreferrer" className="icon">
            <i className="bx bxl-github"></i>
          </a>

          <div className="icon">
            <i className="bx bxl-facebook-circle"></i>
          </div>

          <div className="icon">
            <i className="bx bxl-whatsapp"></i>
          </div>

          <div className="icon">
            <i className="bx bxl-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;