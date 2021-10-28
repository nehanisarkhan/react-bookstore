import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
import { books } from './books';
import Book from './Book';

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />; //reacts needs a unique prop known as key to keep track of component added or removed.you can also use index instead if the items are going to be the same
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
