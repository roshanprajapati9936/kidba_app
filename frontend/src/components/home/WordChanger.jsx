import React, { useState, useEffect } from 'react';

const WordChanger = () => {
  const words = ["Kids","Child","Youth"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <span>Study of <strong>{words[currentWordIndex]}</strong></span>
    </div>
  );
};

export default WordChanger;
