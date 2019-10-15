import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{
        props.hold.map(book =>{
         return <Book key={book.id} book={book} addToBookshelf={props.addToBookshelf}/>
        })
      }</ul>
    </div>
  );
};

export default Bookshelf;
