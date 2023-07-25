import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../Assets/Marca.png';
import '../Styles/About.css';
import { Slide, TextoSlide } from '../Components/HomeHeader.jsx';

const About = () => {
  const location = useLocation();

  const slides = [
    {
      image: image,
      text: 'La tierra proporciona lo suficiente para satisfacer las necesidades de cada hombre, pero no la codicia de cada hombre.',
      author: 'Mahatma Gandhi',
      backgroundColor: 'black',
      textColor: '#fff',
    },
  ];

  const routes = [
    { path: '/home', label: 'Home', icon: <i className="fas fa-home button-icon"></i> },
    { path: '/information', label: 'Information', icon: <i className="fas fa-info-circle"></i> },
    { path: '/context', label: 'Context', icon: <i className="fas fa-book"></i> },
    { path: '/about', label: 'About', icon: <i className="fas fa-users"></i> },
  ];

  return (
    <div>

      <main>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <a href={slide.link}>
              <img src={slide.image} alt="" />
            </a>
            <TextoSlide colorFondo={slide.backgroundColor} colorTexto={slide.textColor}>
              <p>
                <strong>{slide.text}</strong>
                <br />
                - {slide.author}
              </p>
            </TextoSlide>
          </Slide>
        ))}
      </main>

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
      
    </div>
  );
};

export default About;
