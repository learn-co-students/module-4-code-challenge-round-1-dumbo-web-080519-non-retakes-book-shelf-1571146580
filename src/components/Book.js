import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleBookButton(props.book)}>
      <h2> {props.book.title}</h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
