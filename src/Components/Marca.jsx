import React from 'react';
import marcaImage from '../Assets/Marca.png';
import '../Styles/Marca.css';

const Marca = ({ loading }) => {
  return loading ? (
    <img src={marcaImage} alt="Marca de ejemplo" className="img-marca" />
  ) : null;
};

export default Marca;
