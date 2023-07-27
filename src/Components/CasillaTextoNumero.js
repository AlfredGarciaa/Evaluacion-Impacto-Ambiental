import React from 'react';

const CasillaTextoNumero = ({ contenido, fondo, texto }) => {
  const style = {
    backgroundColor: fondo,
    color: texto,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '180px',
    height: '50px',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    border: '1px solid black',
  };

  return <div style={style}>{contenido}</div>;
};

export default CasillaTextoNumero;
