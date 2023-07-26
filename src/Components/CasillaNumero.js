import React from 'react';

const CasillaNumero = ({ numero, onChange }) => {
  return (
    <input
      type="number"
      className="casilla"
      value={numero}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default CasillaNumero;
