import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import '../Styles/Spinner.css';

const Spinner = ({ loading }) => (
  <div className="spinner-container">
    {loading && <HashLoader size={120} color="#36d7b7" className="custom-spinner" />}
  </div>
);

export default Spinner;
