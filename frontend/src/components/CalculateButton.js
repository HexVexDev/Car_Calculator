import React from 'react';

const ButtonComponent = ({ calculateValues }) => {
  
  return (
    <button onClick={calculateValues}>Calculate Values</button>
  );
};

export default ButtonComponent;