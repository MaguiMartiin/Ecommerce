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
    <div className=' text-base border p-[1rem] flex justify-center '>
      <button onClick={handleDecrement} className='w-[1.5rem] h-[1.5rem] hover:bg-gray-200 border-gray-400 rounded-full'>-</button>
      <h1 className='flex justify-center w-[2.5rem]'>{count}</h1>
      <button onClick={handleIncrement} className='w-[1.5rem] h-[1.5rem] hover:bg-gray-200 border-gray-400 rounded-full'>+</button>
    </div>
  );
};

export default Counter;
