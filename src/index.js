import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg',
    title: 'How to Catch a Mermaid',
    author: 'Adam Wallace',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91hzcTMy3GL._AC_UL200_SR200,200_.jpg',
    title: 'Grumpy Monkey',
    author: 'Suzanne Lang',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81vTRhCo4sL._AC_UL200_SR200,200_.jpg',
    title: 'The Invisible String',
    author: 'Patrice Karst',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map(book => (
        <Book book={book} />
      ))}
    </section>
  );
}

const Book = props => {
  const { img, title, author } = props.book;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
