import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  console.log(props.book)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}/>
      </ul>
    </div>
  );
};

export default Bookshelf;
