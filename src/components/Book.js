import React from "react";

const Book = ({book, addBook, removeBook}) => {

  return (
    <div>
      <h2>{book.title}</h2>
      {
        <img
          src={book.img}
          alt="img"
          onClick={() => addBook ? addBook(book) : removeBook(book)}/>
      }
    </div>
  );
};

export default Book;
