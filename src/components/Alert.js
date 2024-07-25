import React from 'react';
import './Alert.css'; // If you have additional custom styles

const Alert = ({ message, onClose }) => {
  return (
    
    <div class="alert alert-success" role="alert">
        <span>{message} </span>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
