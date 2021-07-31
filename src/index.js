import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'Adam Wallace';

const Book = () => {
  const title = 'How to Catch a Mermaid';
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* this is a comment in JSX code */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
