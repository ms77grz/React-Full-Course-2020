import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// named import
import { data } from './books';
import { greeting } from './testing/testing';

// in default export the naming of import is completely independent and we can use any name we like
import SpesificBook from './Book';

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map(book => (
        <SpesificBook key={book.id} {...book} />
      ))}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
