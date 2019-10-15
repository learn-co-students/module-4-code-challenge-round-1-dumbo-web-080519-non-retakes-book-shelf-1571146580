import React from "react";

const Book = (props) => {
  // console.log(props.book)
  return (
    <div  onClick={props.clickHandler}>
      <h2 >{props.book ? props.book.title : null}</h2>
      <img src={props.book ? props.book.img : null} alt=''/>
    </div>
  );
};

export default Book;
