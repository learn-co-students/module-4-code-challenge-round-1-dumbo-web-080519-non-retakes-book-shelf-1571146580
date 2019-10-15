import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBookshelf = () => {
    return props.appState.bookShelf.map(book => {
      return (
        <ul>
          <li>Title: {book.title}</li>
          <li>Author: {book.author}</li>
        </ul>
      )
      
    })
  }

  const handleClick = (book) => {
    props.removeFromBookshelf(book)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <div onClick={handleClick}>{renderBookshelf()}</div>
    </div>
  );
};

export default Bookshelf;
