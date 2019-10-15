import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => {
      return <Book key={book.title} book={book} addToBookshelf={this.props.addToBookshelf} books={this.props.books}/>
    })
  }
  
  render() {
    return (
      <div className="book-list">
        <Form addBookByForm={this.props.addBookByForm}/>
        <h1>Book List</h1>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
