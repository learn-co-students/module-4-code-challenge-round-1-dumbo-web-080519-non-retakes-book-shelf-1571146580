import React from "react";

const Book = ({book}) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.img} alt={`${book.title} Cover Art`} />
    </div>
  );
};

export default Book;
