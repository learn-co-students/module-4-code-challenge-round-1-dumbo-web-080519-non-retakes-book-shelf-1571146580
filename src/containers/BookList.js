import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {



  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form formSubmit={this.props.formSubmit}/>
        <ul>
          {
            this.props.books.map( book=> {
              return <Book key={book.title} click={this.props.click} data={book}/> 
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookList;
