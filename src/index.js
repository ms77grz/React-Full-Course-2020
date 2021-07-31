import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hello, React!')
//   );
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));
