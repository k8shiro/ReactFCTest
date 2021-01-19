import React, { useState,  useEffect, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [numX, setNumX] = useState(1);
  
  const setRandomX = useCallback(() => {
    setNumX(Math.round(Math.random()*100))
  });

  useEffect(() => {
    setRandomX()
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Random number is {numX} !!</p>
    </div>
  );
}

export default App;
