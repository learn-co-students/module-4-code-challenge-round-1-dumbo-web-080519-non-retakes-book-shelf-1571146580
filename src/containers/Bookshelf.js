import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props)
    // displayBooks = () => {
    //   return props.placeBooks.map(book => <li><Book book={book} key={`bookshelf-${book.id}`} removeBook={props.removeBook}/></li>);
    // };
  return (
    <div>
      <h1>Book Shelf</h1>
      {/* <ul>{this.displayBooks()}</ul> */}
    </div>
  );
};

export default Bookshelf;
