import React, { useState, useEffect } from 'react';

export default function ShortCircuit() {
  const [text, setText] = useState('');

  return (
    <>
      <h1>{text || 'Learn HTML'}</h1>
      {!text && <h1>And CSS</h1>}
      {text && <h1>And React</h1>}
      <h3>
        {text
          ? 'To Be A Frontend Web Developer'
          : 'To Be A Professional Web Designer'}
      </h3>
      <button className='btn' onClick={() => setText('Learn JS')}>
        {text ? 'before' : 'next'}
      </button>
    </>
  );
}
