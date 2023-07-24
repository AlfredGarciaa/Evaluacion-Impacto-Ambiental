import React, {useRef} from 'react';
import image1 from '../Assets/Home 1.png';
import image2 from '../Assets/Home 2.png';
import image3 from '../Assets/Home 3.png';
import image4 from '../Assets/Home 4.png';
import '../Styles/Home.css';
import {ReactComponent as FlechaIzquierda} from '../Assets/Selector Izquierda.svg';
import {ReactComponent as FlechaDerecha} from '../Assets/Selector Derecha.svg';
import styled from 'styled-components';

const Slideshow = () => {
    const slideshow = useRef(null);

    const Siguiente = () => {
        if(slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = '500ms ease-out all';

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
  
    const Anterior = () => {
        if(slideshow.current.children.length > 0) {

            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            
            slideshow.current.style.transition = 'none';

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
        
            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
				slideshow.current.style.transform = 'translateX(0)';
            }, 30);
        }
    }

    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow} className="header">
                <Slide>
                    <a href="https://www.sinergiaanimal.org/single-post/2020/06/04/impactos-ambientales-del-consumo-animales">
                        <img src={image1} alt="" />
                    </a>
                    <TextoSlide colorFondo="navy" colorTexto="#fff">
                        <p>IA del consumo de productos animales</p>
                    </TextoSlide>
                </Slide>

                <Slide>
                    <a href="https://geoinnova.org/blog-territorio/impacto-ambiental-riesgos-salud/">
                        <img src={image2} alt="" />
                    </a>
                    <TextoSlide colorFondo="#ff8000" colorTexto="#000">
                        <p>IA en los riesgos de la salud humana</p>
                    </TextoSlide>
                </Slide>

                <Slide>
                    <a href="https://www.lavanguardia.com/tecnologia/innovacion/20190617/462863973194/inteligencia-artificial-impacto-ambiental-mayor-creia.html">
                        <img src={image3} alt="" />
                    </a>
                    <TextoSlide colorFondo="navy" colorTexto="#fff">
                        <p>IA en la inteligencia artificial, mucho mayor del que se creia</p>
                    </TextoSlide>
                </Slide>

                <Slide>
                    <a href="https://www.unep.org/es/noticias-y-reportajes/noticias/el-dano-ambiental-aumenta-en-todo-el-planeta-pero-aun-hay-tiempo">
                        <img src={image4} alt="" />
                    </a>
                    <TextoSlide colorFondo="#ff8000" colorTexto="#000">
                        <p>IA daña a todo el planeta, pero aún hay tiempo para revertir si los gobiernos actúan ahora</p>
                    </TextoSlide>
                </Slide>
            </ContenedorSlideshow>
            <Controles>
                <Boton onClick={Anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho onClick={Siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    );
};

const ContenedorPrincipal = styled.div`
    position: relative;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;

const TextoSlide = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
    }
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'};
`;

export default Slideshow;
