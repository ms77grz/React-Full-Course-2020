import React, { useState, useEffect } from 'react';

export default function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', updateSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  console.log('render');
  return (
    <>
      <h1>Window</h1>
      <h2>{size}</h2>
    </>
  );
}
