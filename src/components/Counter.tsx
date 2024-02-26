import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>
      <h1>Current Count: {counter}</h1>
    </div>
  );
};

export default Counter;
