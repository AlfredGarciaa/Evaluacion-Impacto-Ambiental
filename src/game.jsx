import React, { useEffect, useState, useRef } from 'react';
import './style.css';
import spriteSheetImg from './sprite sheet.png';
import katImg from './Kat.png';

const SpriteAnimations = () => {
  const canvasRef = useRef(null);
  const [animation, setAnimation] = useState('run');

  useEffect(() => {
    const canvas = canvasRef.current;
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
      requestAnimationFrame(animate);
    }

    myImg.onload = () => {
      animate();
    };
  }, [animation]);

  return (
    <div className="sprite-container">
      <canvas ref={canvasRef} id="myCanvas"></canvas>
      <div className="control">
        <img src={katImg} alt="Kat character" className="kat-image" />
        <div>
          <label htmlFor="animations">I can</label>
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
