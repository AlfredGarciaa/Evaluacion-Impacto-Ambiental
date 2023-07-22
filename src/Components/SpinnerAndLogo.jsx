import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import '../Styles/Spinner.css';

const Mostrar = ({ loading }) => (
  <div className="spinner-container">
    <HashLoader size={100} color={"#36d7b7"} loading={loading} className="custom-spinner" />
    <p className={`custom-loading-text ${loading ? 'show' : 'hide'}`}>
      "aamdklsamfkasfmk  salfklasm..."
    </p>
  </div>
);

export default Mostrar;
