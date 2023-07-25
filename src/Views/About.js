import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../Assets/Marca.png';
import '../Styles/About.css';
import '../Styles/Icons.css';
import '../Styles/Text.css';

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

      <div class="body2">
        <div class="container">
          <div class="objetivos-container">
              <h2 style={{ fontSize: '20px', fontFamily: 'Pacifico, cursive', color: 'blue' }} class="subrayado">Objetivo</h2>
              <br />
              <ul style={{ fontSize: '16px', fontFamily: 'Georgia, serif'}} class="justify-text">
                Desarrollar una aplicación web de código abierto para la estimación de EIA aplicando la matriz de leopold.
                <br /> <br />
                <li>✔ Implementar la matriz de leopold para proveer información de los efectos ambientales en proyectos hidroeléctricos. </li>
                <br />
                <li>✔ Facilitar la visualización de las alteraciones de los factores y elementos ambientales según la geolocalización de los proyectos. </li>
                <br />
                <li>✔ Realizar una identificación de elementos y acciones de las causas de impacto ambiental. </li>
                <br />
                <li>✔ Realizar un código sin protección legal para la EIA. </li>
              </ul>
          </div>
          <div className="aporte-container">
              <h2 style={{ fontSize: '21px', fontFamily: 'Pacifico, cursive', color: 'green' }} class="subrayado">Aporte</h2>
              <br />
              <ul style={{ fontSize: '15px', fontFamily: 'Georgia, serif'}} class=" justify-text">
              Contribuir a una aplicación de código abierto puede ser provechoso tanto para los colaboradores como para la comunidad en general; es de alguna forma gratificante de participar en la comunidad de desarrolladores, mejorar tus habilidades y fomentar el acceso a software libre y de alta calidad para todos.
              <br /> <br />
                ★	Contribuir al bien común.
                <br />
                ★	Aprendizaje y mejora de habilidades.
                <br />
                ★	Desarrollo de un portafolio.
                <br />
                ★ Colaboración y networking.
                <br />
                ★	Mejorar el software que usas.
                <br />
                ★	Recibir reconocimiento y gratitud.
                <br />
                ★	Participación en comunidades activas.
                <br />
                ★	Mejora de tu reputación profesional.
              </ul>
          </div>
        </div>
      </div>

      <div className="body1">
        <div className="main1">
          <a href={githubRepoURL} target="_blank" rel="noopener noreferrer" className="icon icon-git">
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