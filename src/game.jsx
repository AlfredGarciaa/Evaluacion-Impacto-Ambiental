import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import spriteSheetImg from './sprite sheet.png';
import katImg from './Kat.png';

const SpriteAnimations = () => {
  const [animation, setAnimation] = useState('run');
  const canvasRef = useRef(null);
  const canvasMapRef = useRef(new Map());
  const animationRef = useRef(null); // Referencia a la solicitud de animación actual

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Salir si el canvas no está disponible
    const ctx = canvas.getContext('2d');
    const spriteWidth = 1038;
    const spriteHeight = 833;
    let gameFrame = 0;
    let stagger = 0;
    const staggerFrame = 5;
    let index = 3;

    const spriteAnimations = ['run', 'attack', 'jump', 'dash'];

    const animationStates = [
      {
        name: 'run',
        frames: 4,
      },
      {
        name: 'attack',
        frames: 6,
      },
      {
        name: 'jump',
        frames: 9,
      },
      {
        name: 'dash',
        frames: 7,
      }
    ];

    canvas.width = spriteWidth;
    canvas.height = spriteHeight;

    const myImg = new Image();
    myImg.src = spriteSheetImg;

    function animate() {
      if ((stagger % staggerFrame) === 0) {
        ctx.clearRect(0 , 0, spriteWidth, spriteHeight); // Limpiar el lienzo antes de dibujar el nuevo cuadro
        index = spriteAnimations.indexOf(animation);
        let frameX = spriteWidth * (gameFrame % (animationStates[index].frames));
        let frameY = spriteHeight * index;
        ctx.drawImage(myImg, frameX, frameY, spriteWidth, spriteHeight,
          0, 0, spriteWidth, spriteHeight);
        gameFrame++; 
      }
      stagger++;
      animationRef.current = requestAnimationFrame(animate);
    }

    myImg.onload = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animate();
    };
  }, [animation]);

  useEffect(() => {
    // Función para crear un nuevo canvas para la animación seleccionada
    const createNewCanvas = () => {
      const newCanvas = document.createElement('canvas');
      newCanvas.width = 1038;
      newCanvas.height = 833;
      canvasMapRef.current.set(animation, newCanvas);
    };

    // Función para obtener el canvas correspondiente a la animación seleccionada
    const getCanvas = () => {
      if (!canvasMapRef.current.has(animation)) {
        createNewCanvas();
      }
      return canvasMapRef.current.get(animation);
    };

    // Limpiar canvas al cambiar la animación
    const canvas = getCanvas();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [animation]);

  return (
    <div className="sprite-container">
      <canvas ref={canvasRef} />
      <div className="control">
        <img src={katImg} alt="Kat character" className="kat-image" />
        <div>
          <label htmlFor="animations">
            <u>I can: </u> <i className="fa fa-masks-theater"></i>
        </label>
          <select
            name="animations"
            id="animations"
            value={animation}
            onChange={(e) => setAnimation(e.target.value)}
          >
            <option value="run">Run</option>
            <option value="attack">Attack</option>
            <option value="jump">Jump</option>
            <option value="dash">Dash</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SpriteAnimations;
