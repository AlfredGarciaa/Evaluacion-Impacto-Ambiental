import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import '../Styles/Spinner.css';

const Spinner = ({ loading }) => (
  <div className="spinner-container">
    {loading && <HashLoader size={100} color="#37B1FC" className="custom-spinner" />}
  </div>
);

export default Spinner;
