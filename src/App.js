import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const url = 'http://localhost:3005/books'
class App extends Component {
  state = {
    books: [],
    bookshelf: []
  }

  getFetch = () => {
    fetch(url)
    .then(res => res.json())
    .then(books => {
      this.setState({books})
    })
  }

  componentDidMount() {
    this.getFetch()
  }

  addBook = (book) => {
    if(!this.state.bookshelf.includes(book)){
      this.setState({
        bookshelf: [...this.state.bookshelf, book]
      })
    }
  }

  removeBook = (shelfBook) => {
    let newBookshelf = this.state.bookshelf.filter(book => book.id !== shelfBook.id)
    this.setState({
      bookshelf: newBookshelf
    })
  }

  addToBookList = (book) => {
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        book
      })
    }

    fetch(url, config)
    .then(res => res.json())
    .then(this.setState({
      books: [book, ...this.state.books]
    }))
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          addBook={this.addBook}
          addToBookList={this.addToBookList}/>
        <Bookshelf
          bookshelf={this.state.bookshelf}
          removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
