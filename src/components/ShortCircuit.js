import React, { useState } from 'react';

export default function ShortCircuit() {
  const [text, setText] = useState('');
  const [how, setHow] = useState(false);

  const whatNext = () => {
    if (text !== 'Learn JS') {
      setText('Learn JS');
    } else {
      setText('');
    }
  };

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

      <button className='btn' onClick={whatNext}>
        {text ? 'before' : 'next'}
      </button>
      <button className='btn' onClick={() => setHow(!how)}>
        want to know how?
      </button>
      {how && (
        <h2 className='item'>
          <a href='https://google.com'>Google It!</a>
        </h2>
      )}
    </>
  );
}
