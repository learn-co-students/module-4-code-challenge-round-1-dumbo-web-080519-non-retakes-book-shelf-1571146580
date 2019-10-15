import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(bookArray => {
      this.setState({
        bookList: bookArray
      })
    })
  }

  addToShelf = (bookToAdd) => {
    this.setState({
      bookShelf: [ bookToAdd, ...this.state.bookShelf ]
    })
  }

  removeFromShelf = (bookToRemove) => {
    let newShelf = this.state.bookShelf.filter( book => {
      return book !== bookToRemove
    })
    this.setState({
      bookShelf: newShelf
    })
  }

  formSubmit = (bookData) => {
    this.setState({
      bookList: [bookData, ...this.state.bookList]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="book-container">
        <BookList formSubmit={ this.formSubmit } click={this.addToShelf} books={this.state.bookList}/>
        <Bookshelf click={this.removeFromShelf} books={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
