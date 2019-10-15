import React from "react";

const Book = ({ book, handleClick }) => {
  return (
    <div onClick = { () => handleClick(book) }>
      <h2>{ book.title }</h2>
      <img src={ book.img } alt={ book.title }/>
    </div>
  );
};

export default Book;
