import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form  handleChange={this.props.handleChange} />
        <ul>{
            this.props.bookList.map((book, id) =>(
              <Book handleBookButton={this.props.handleBookButton}book={book} key={book.id}/>
            ))
          }</ul>
      </div>
    );
  }
}

export default BookList;
