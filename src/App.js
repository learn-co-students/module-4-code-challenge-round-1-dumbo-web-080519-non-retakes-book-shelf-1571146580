import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(booksArr => {
        this.setState({
          books: booksArr
        })
      })
  }

  addToBookshelf = (book) => {
    this.setState({
      bookShelf: [...this.state.bookShelf, book]
    })
    console.log(this.state)
  }

  removeFromBookshelf = (currentBook) => {
    const booksOnShelf = this.state.bookShelf
    console.log(booksOnShelf)
    booksOnShelf.splice(book => book.id === currentBook.id)
    this.setState({
      bookShelf: booksOnShelf
    })
  }

  addBookByForm = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook]
    })
    // fetch("http://localhost:3005/books", {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify({newBook})
    // })
    // .then(res => res.json())
  }

  render() {
    return (
      <div className="book-container">
        <BookList addBookByForm={this.addBookByForm} books={this.state.books} addToBookshelf={this.addToBookshelf}/>
        <Bookshelf appState={this.state} removeFromBookshelf={this.removeFromBookshelf}/>
      </div>
    );
  }
}

export default App;
