import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg',
    title: 'How to Catch a Mermaid',
    author: 'Adam Wallace',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91hzcTMy3GL._AC_UL200_SR200,200_.jpg',
    title: 'Grumpy Monkey',
    author: 'Suzanne Lang',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81vTRhCo4sL._AC_UL200_SR200,200_.jpg',
    title: 'The Invisible String',
    author: 'Patrice Karst',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map(book => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = e => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = author => {
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
