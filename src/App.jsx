// src/App.js
import React, { useState } from 'react';
import AlphabetTile from './components/AlphabetTile';

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;
    
    // Replace consecutive letters logic
    newString = newString.replace(/(.)\1{2,}/g, match => '_'.repeat(Math.ceil(match.length / 3)));
    
    setOutputString(newString);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div>
        {alphabet.map(letter => (
          <AlphabetTile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </div>
      <div id="outputString" style={{ marginTop: '20px', fontSize: '24px' }}>
        {outputString}
      </div>
    </div>
  );
};

export default App;
