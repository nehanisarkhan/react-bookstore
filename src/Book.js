import React from 'react';

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book; //props destructuring

  const clickHandler = (e) => {
    //to access the event object
    console.log(e);
    console.log(e.target);

    alert('Hello world');
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book-cover" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
//a default export can be imported with another name in the destination file
