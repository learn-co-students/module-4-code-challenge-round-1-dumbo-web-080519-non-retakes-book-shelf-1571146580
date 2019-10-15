import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import { runInThisContext } from "vm";
const url = 'http://localhost:3005/books'

class App extends Component {

  state = {
    bookList: [],
    bookShelf: []
  }

  handleClick = (bookObj) => {
    if(this.state.bookShelf.includes(bookObj)){
      this.handleRemove()
    } else{
      this.setState({
        bookShelf: [bookObj, ...this.state.bookShelf]
      })
    }
  }

  addBook = (bookObj) => {

      this.setState({
        bookList: [bookObj, ...this.state.bookList]
      })

  }

  handleRemove = (bookObj) => {
    const oldShelf = this.state.bookShelf
    const newShelf = oldShelf.filter(function(book){
      return book !== bookObj
    })
    this.setState({
      bookShelf: [newShelf]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books = { this.state.bookList }
          handleClick = { this.handleClick }
          addBook = { this.addBook }
        />
        <Bookshelf
          books = { this.state.bookShelf }
          handleClick = { this.handleClick }
        />
      </div>
    );
  }

  componentDidMount = () => {
    fetch(url)
    .then(res => res.json())
    .then(bookArr => {
      this.setState({ bookList: bookArr }, () => console.log(this.state))
    })
  }
}

export default App;
