import React from "react";


const RemoveButton = (book) => {
  
  console.log("Book :", book)

  let {title} = book

  return (<button id={book.id} onClick={props.handleDelete}>X</button>
  );
};

export default Book;