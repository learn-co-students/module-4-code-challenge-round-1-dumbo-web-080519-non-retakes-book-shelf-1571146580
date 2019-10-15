import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {
          props.books.map(book => {
            return <Book key={book.title} click={props.click} data={book} />
          })
        }
      </ul>
    </div>
  );
};

export default Bookshelf;
