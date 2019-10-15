import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // console.log("Props", this.props)
    return (
    
      <div className="book-list">
        <h1>Book List</h1>
        <Form books={this.props.books} handleSubmit={this.handleSubmit} />
        <ul>{
          //iterate through books obj from props
          this.props.books.map((book, id) =>{
            // console.log("Map",  book )
            return <Book key ={id} book={book} addToBookshelf={this.props.addToBookshelf}/>
          })
        }
        </ul>
      </div>
    );
  }
}

export default BookList;
