import React from "react";

const Book = props => {
  const {title, img} = props.book
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt="" onClick={()=>props.handleBookClick(props.book)}/>
    </div>
  );
};

export default Book;
