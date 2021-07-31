import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);

const Title = () => <h1>How to Catch a Mermaid</h1>;

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Adam Wallace
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById('root'));
