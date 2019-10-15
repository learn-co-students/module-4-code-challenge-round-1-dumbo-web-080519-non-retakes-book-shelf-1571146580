import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    bookList: [],
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(bookList => {
      this.setState({
        bookList
      })
    })
  }

  // handleClickOnBookInList = id => {
  //   // console.log(id);
  //   const bookList = this.state.bookList.map(book => {
  //     // console.log(book.id);
  //     // console.log(book.id === id);
  //     // console.log(typeof id);
  //     // console.log(typeof book.id);
  //     return book.id === parseInt(id, 10) ? {...book, onShelf: true} : book
  //   })
  //   this.setState({
  //     bookList
  //   })
  // }
  //
  // handleClickOnBookOnBookshelf = id => {
  //   const bookList = this.state.bookList.map(book => {
  //     return book.id === parseInt(id, 10) ? {...book, onShelf: false} : book
  //   })
  //   this.setState({
  //     bookList
  //   })
  // }

  handleClickOnBook = (id, newOnShelfValue) => {
    // console.log(id);
    const bookList = this.state.bookList.map(book => {
      // console.log(book.id);
      // console.log(book.id === id);
      // console.log(typeof id);
      // console.log(typeof book.id);
      return book.id === parseInt(id, 10) ? {...book, onShelf: newOnShelfValue} : book
    })
    this.setState({
      bookList
    })
  }

  // // Does not persist
  // handleAddBook = (title, author, img) => {
  //   // const book = {title, author, img}
  //   // console.log(title, author, img);
  //   console.log(book);
  //   this.setState(prevState => {
  //     return {bookList: [...prevState.bookList, book]}
  //   })
  // }

  // Does persist, pessimistic rendering
  handleAddBook = (title, author, img) => {
    const book = {title, author, img}
    // console.log(title, author, img);
    // console.log(book);
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(book => {
      this.setState(prevState => {
        return {bookList: [...prevState.bookList, book]}
      })
    })
  }

  booksOnBookshelf = () => {
    return this.state.bookList.filter(book => book.onShelf)
  }

  render() {
    const { state: {bookList},
            /*handleClickOnBookInList,
            handleClickOnBookOnBookshelf,*/
            handleClickOnBook,
            handleAddBook,
            booksOnBookshelf } = this

    return (
      <div className="book-container">
        < BookList bookList={ bookList }
                   handleClickOnBook={ handleClickOnBook }
                   handleAddBook={ handleAddBook } />
        < Bookshelf booksOnBookshelf={ booksOnBookshelf() }
                    handleClickOnBook={ handleClickOnBook } />
      </div>
    );
  }
}

export default App;
