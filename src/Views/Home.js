import React from 'react';
import { Link } from 'react-router-dom';
import { Slideshow, Slide, TextoSlide } from '../Components/HomeHeader.jsx';
import '../Styles/Home.css';
import image1 from '../Assets/Home 1.png';
import image2 from '../Assets/Home 2.png';
import image3 from '../Assets/Home 3.png';
import image4 from '../Assets/Home 4.png';
import Calendar from 'react-calendar';

const Home = () => {
  const slides = [
    {
      link: 'https://www.unep.org/es/noticias-y-reportajes/noticias/el-dano-ambiental-aumenta-en-todo-el-planeta-pero-aun-hay-tiempo',
      image: image1,
      text: 'IA daña a todo el planeta, pero aún hay tiempo para revertir si los gobiernos actúan ahora',
      backgroundColor: 'navy',
      textColor: '#fff',
    },
    {
      link: 'https://www.lavanguardia.com/tecnologia/innovacion/20190617/462863973194/inteligencia-artificial-impacto-ambiental-mayor-creia.html',
      image: image2,
      text: 'IA en la inteligencia artificial, mucho mayor del que se creía',
      backgroundColor: '#ff8000',
      textColor: '#000',
    },
    {
      link: 'https://www.sinergiaanimal.org/single-post/2020/06/04/impactos-ambientales-del-consumo-animales',
      image: image3,
      text: 'IA del consumo de productos animales',
      backgroundColor: 'navy',
      textColor: '#fff',
    },
    {
      link: 'https://geoinnova.org/blog-territorio/impacto-ambiental-riesgos-salud/',
      image: image4,
      text: 'IA en los riesgos de la salud humana',
      backgroundColor: '#ff8000',
      textColor: '#000',
    },
  ];

  const routes = [
    { path: '/home', label: 'Home' },
    { path: '/information', label: 'Information' },
    { path: '/context', label: 'Context' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div>
      <main>
        <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
          {slides.map((slide, index) => (
            <Slide key={index}>
              <a href={slide.link}>
                <img src={slide.image} alt="" />
              </a>
              <TextoSlide colorFondo={slide.backgroundColor} colorTexto={slide.textColor}>
                <p>{slide.text}</p>
              </TextoSlide>
            </Slide>
          ))}
        </Slideshow>
      </main>

      <div className="button-bar">
        {routes.map((route, index) => (
          <React.Fragment key={index}>
            <Link to={route.path}>{route.label}</Link>
            <br />
          </React.Fragment>
        ))}
      </div>

      <div className="calendar-container">
        <div className="calendar-box">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Home;
