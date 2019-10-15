import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  displayList = () => {
    return this.props.list.map(book => <li><Book book={book} key={book.name} handleBookClick={this.props.handleBookClick}/></li>)
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handelSubmit={this.props.handelSubmit}/>
        <ul>{this.displayList()}</ul>
      </div>
    );
  }
}

export default BookList;
