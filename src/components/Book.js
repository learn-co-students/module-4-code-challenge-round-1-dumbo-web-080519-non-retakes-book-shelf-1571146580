import React from "react";
import Bookshelf from "../containers/Bookshelf";

const Book = props => {

  const handleBookClick = () => {
      props.addToBookshelf(props.book)
  }
  
  return (
    <div onClick={handleBookClick}>
      <h2>{props.book.title}</h2>
        <img src={props.book.img} alt="" />
        <p>Written by: {props.book.author}</p>
    </div>
  );
};

export default Book;
