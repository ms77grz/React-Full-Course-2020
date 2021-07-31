import React from 'react';
export default function ErrorExample() {
  let title = 'random title';
  const handleClick = params => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
}
