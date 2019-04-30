import React, { useState } from 'react';
import './styles.css';

export function Modal() {
  const [state, setState] = useState(false);

  function handleClick() {
    return setState(prevState => !prevState);
  }

  return (
    <>
      <button type="button" onClick={handleClick}>Open</button>
      {state && <div className="overlay">
        <div data-testid="modal" className="modal">
          <button type="button" onClick={handleClick}>&times;</button>
          <p>Hello Modal!</p>
        </div>
      </div>}
    </>
  )
}
