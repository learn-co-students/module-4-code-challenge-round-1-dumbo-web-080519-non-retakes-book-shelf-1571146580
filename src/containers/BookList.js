import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {

    let clickHandler = (bookId) => {
      console.log("clicked")
    }


    let mapBooksArray = () => {
      // console.log("books Array is hit")
        return(
          this.props.books.map( book =>
             <Book book = {book} clickHandler = {clickHandler}/>
          )
        )
      }



    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{mapBooksArray()}</ul>
      </div>
    );
  }
}

export default BookList;
