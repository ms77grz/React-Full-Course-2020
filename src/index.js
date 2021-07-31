import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// implicit return
const Person = () => <h2>John Doe</h2>;

// explicit return
const Message = () => {
  return <p>This is a message.</p>;
};
ReactDOM.render(<Greeting />, document.getElementById('root'));
