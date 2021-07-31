import React, { useState } from 'react';

export default function UseStateBasics() {
  const [text, setText] = useState('random title');
  const handleClick = params => {
    if (text === 'random text') {
      setText('hello world');
    } else {
      setText('random text');
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
}
