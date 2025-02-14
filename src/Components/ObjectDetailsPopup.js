import React from 'react';
import './ObjectDetailsPopup.css';

const ObjectDetailsPopup = ({ details, onClose, objectName }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{objectName}</h3>
        <p>{details}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ObjectDetailsPopup;