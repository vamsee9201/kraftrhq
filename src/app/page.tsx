"use client";

import React, { useState } from 'react';

const Page = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const handleSubmit = () => {
    console.log('Number 1:', number1);
    console.log('Number 2:', number2);
  };

  return (
    <div>
      <h1>Enter Two Numbers</h1>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="number"
          id="number1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page;
