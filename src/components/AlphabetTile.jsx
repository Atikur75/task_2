// src/components/AlphabetTile.js
import React from 'react';

const AlphabetTile = ({ letter, onClick }) => {
  return (
    <div 
      style={{
        display: 'inline-block',
        margin: '5px',
        padding: '20px',
        border: '1px solid black',
        cursor: 'pointer',
        textAlign: 'center',
      }} 
      onClick={() => onClick(letter)}
    >
      {letter}
    </div>
  );
};

export default AlphabetTile;
