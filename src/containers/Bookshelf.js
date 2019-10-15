import React from "react";
import Book from "../components/Book";

const Bookshelf = ({bookshelf, removeBook}) => {
  const renderBookshelf = () => {
    return bookshelf.map(book => {
      return <Book
        book={book}
        key={`shelf-${book.id}`}
        removeBook={removeBook}/>
    })
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {
          renderBookshelf()
          }
      </ul>
    </div>
  );
};

export default Bookshelf;
