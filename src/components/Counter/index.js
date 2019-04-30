import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return setCount(prevCount => prevCount + 1);
  }

  return (
    <>
      <p data-testid="counter">{count}</p>
      <button
        type="button"
        onClick={handleClick}
        data-testid="button"
      >+</button>
    </>
  )
}
