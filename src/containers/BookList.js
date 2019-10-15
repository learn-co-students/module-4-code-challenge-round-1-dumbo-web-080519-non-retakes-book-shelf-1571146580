import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  renderBooks = () => {
    const books = this.props.books
    return books.map(book => {
      return <Book
        book={book}
        key={`book-${book.id}`}
        addBook={this.props.addBook}/>
    })
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addToBookList={this.props.addToBookList}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
