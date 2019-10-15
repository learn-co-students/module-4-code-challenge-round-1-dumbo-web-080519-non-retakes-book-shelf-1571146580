import React from "react";
import Book from "../components/Book";

const Bookshelf = ({ books, handleClick }) => {

  const slapBooks = () => {
    // console.table(books)
    if(books){
      return books.map(book => {
        console.log(book)
        return <Book
                key = {`book-${book.id}`}
                book = { book }
                handleClick = { handleClick }
              />
      })
    }
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{ slapBooks() }</ul>
    </div>
  );
};

export default Bookshelf;
