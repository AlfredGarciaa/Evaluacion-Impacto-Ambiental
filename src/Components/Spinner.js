import React from 'react';
import HashLoader from "react-spinners/HashLoader";
import '../Styles/Logo.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <HashLoader size={100} color={"#36d7b7"} loading={true} className="custom-spinner" />
      <p className="custom-loading-text">
        "asl,fsa,lfsmkasmdklsamdklmaskldmlaskmdklsasadasdsadalfklasm..."
      </p>
    </div>
  );
}

export default Spinner;
