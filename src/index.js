import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg',
  title: 'How to Catch a Mermaid',
  author: 'Adam Wallace',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91hzcTMy3GL._AC_UL200_SR200,200_.jpg',
  title: 'Grumpy Monkey',
  author: 'Suzanne Lang',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
