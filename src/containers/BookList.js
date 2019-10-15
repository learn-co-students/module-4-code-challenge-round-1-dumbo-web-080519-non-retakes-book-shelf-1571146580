import React from "react";
import Book from "../components/Book";
import Form from "../components/Form";

const BookList = ({ books, handleClick, addBook }) => {

  const slapBooks = () => {
    console.table(books)
    return books.map(book => {
      return <Book
              key = {`book-${book.id}`}
              book = { book }
              handleClick = { handleClick }
            />
    })
  }

  // const handleSubmit = (bookObj, event) => {
  //   console.log("submit")
  //   event.preventDefault()
  //   return (<Book
  //             key = {`book-${bookObj.name}`}
  //             book = { bookObj }
  //             handleClick = { handleClick }
  //           />)
  // }


  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form handleClick= { handleClick } addBook={ addBook }/>
      <ul>{ slapBooks() }</ul>
    </div>
  );

}

export default BookList;
