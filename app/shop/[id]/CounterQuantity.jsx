import React, { useState } from 'react';

const Counter = ({ maxCount, count, onCountChange }) => {
  const handleIncrement = () => {
    if (count < maxCount) {
      onCountChange(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      onCountChange(count - 1);
    }
  };

  return (
    <div className=' space-x-6 text-base'>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} >+</button>
    </div>
  );
};

export default Counter;
