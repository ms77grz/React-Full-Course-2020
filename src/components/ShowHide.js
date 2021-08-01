import React, { useState, useEffect } from 'react';

export default function ShowHide() {
  const [show, setShow] = useState('');

  const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const updateSize = () => {
      setSize(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', updateSize);
      return () => {
        window.removeEventListener('resize', updateSize);
      };
    }, []);

    return (
      <div style={{ marginTop: '2rem' }}>
        <h1>window</h1>
        <h2>size: {size}</h2>
      </div>
    );
  };

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        {!show ? 'show' : 'hide'}
      </button>
      {show && <Item />}
    </>
  );
}
