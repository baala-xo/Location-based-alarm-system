import React from 'react';
import './Button.css';
import icon from'../assets/Add_icon.svg'

function Button() {
  return (
    <button className="button">
      <img src={icon} alt="Icon" className="icon" />
    </button>
  );
}

export default Button;
