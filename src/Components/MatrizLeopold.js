import React, { useState } from 'react';
import CasillaTextoNumero from './CasillaTextoNumero';

const MatrizLeopold = ({ style, title, titleStyle }) => {
  const initialMatriz = [
    ["Actividad / Factor", "Proceso de separacion", "Ubicacion de actividades", "Transporte", "Sitios de almacenamiento", "Ruido", "Manejo de desechos", "Tratamiento de desechos"],
    ["Salud y seguridad", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Deterioro de la calidad de suelo", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Contaminacion del aire", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Empleo(Personal capacitado)", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Desechos combustibles", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Emicion de gases", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
    ["Generacion de polvo", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]", "[null]"],
  ];

  const [matriz, setMatriz] = useState(initialMatriz);

  const handleChangeNumero = (fila, columna, valor) => {
    const isActividadFactor = fila === 0 && columna === 0;
    if (isActividadFactor) return;

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
    <div className="matriz" style={style}>
      {title && (
        <div className="title-container">
          <h className="title" style={titleStyle}>
            {title}
          </h>
        </div>
      )}
      {matriz.map((fila, filaIndex) => (
        <div key={filaIndex} className="fila">
          {fila.map((contenido, colIndex) => (
            <CasillaTextoNumero
              key={colIndex}
              contenido={contenido}
              fondo={filaIndex === 0 && colIndex === 0 ? 'yellow' : 'white'}
              texto={filaIndex === 0 && colIndex === 0 ? 'blue' : 'black'}
              readOnly={filaIndex === 0 && colIndex === 0}
              onChange={(valor) => handleChangeNumero(filaIndex, colIndex, valor)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrizLeopold;
