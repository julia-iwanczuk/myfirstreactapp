import React, { useState } from 'react';
import './CardBox.css';

const CardBox = ({ title, extendedText }) => {
  const [isExtended, setIsExtended] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleExtended = () => {
    setIsExtended(!isExtended);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`card-box${isExtended ? ' extended' : ''}`}>
      <div className="card-header">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <h3>{title}</h3>
        <button className="toggle-btn" onClick={toggleExtended}>
          {isExtended ? '▲' : '▼'}
        </button>
      </div>
      <div className="card-content">
        {isExtended && <p>{extendedText}</p>}
      </div>
    </div>
  );
};

export default CardBox;
