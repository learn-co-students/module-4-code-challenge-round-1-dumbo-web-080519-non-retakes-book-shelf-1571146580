import React from "react";
import RemoveButton from "./RemoveButton"

const Book = (props) => {
  const book = props.book
  console.log("Book :", book)
  // console.log("Book title: ", book.title) //not working, undefined
  // console.log("Book title: ", book["title"]) //not working, undefined
  // console.log("Book title: ", book[1]) //not grabbing

  let {title} = props.book
  // console.log("Book Props: ", props.addToBookshelf)
  return (<div className="book">
      <h2>{book.title}</h2>
      <img src={book.img} onClick={props.addToBookshelf(book)} />
      <RemoveButton book={book}/>
    </div>
  );
};

export default Book;
