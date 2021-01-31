import React from 'react';

const Definition = ({ word, definition }) => {
  return (
    <div className='definition'>
      <h3>{word}</h3>
      <p>{definition}</p>
    </div>
  );
};

export default Definition;
