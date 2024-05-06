import React, { useState, useEffect } from 'react';

const PopularWordChanger = () => {
    const words = ["Android App ","IOS App"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
        <span> <strong>{words[currentWordIndex]}</strong></span>
      </div>
    );
}


export default PopularWordChanger;