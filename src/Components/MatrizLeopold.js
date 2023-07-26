import React, { useState } from 'react';
import CasillaNumero from './CasillaNumero.js';

const MatrizLeopold = ({ style }) => {
  const [matriz, setMatriz] = useState(
    Array(8).fill(Array(8).fill(0))
  );

  const handleChangeNumero = (fila, columna, valor) => {
    const nuevaMatriz = matriz.map((filaMatriz, rowIndex) => {
      if (rowIndex === fila) {
        return filaMatriz.map((valorCol, colIndex) =>
          colIndex === columna ? valor : valorCol
        );
      } else {
        return filaMatriz;
      }
    });

    setMatriz(nuevaMatriz);
  };

  return (
    <div className="matriz" style={style} >
      {matriz.map((fila, filaIndex) => (
        <div key={filaIndex} className="fila">
          {fila.map((numero, colIndex) => (
            <CasillaNumero
              key={colIndex}
              numero={numero}
              onChange={(valor) => handleChangeNumero(filaIndex, colIndex, valor)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrizLeopold;
