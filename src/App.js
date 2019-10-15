import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


const url = 'http://localhost:3005/books'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(booksArray => {
      this.setState({
        books: booksArray
      })
    })
  }

  clickHandler = () => {
    console.log("i was clicked and i should move over to the shelf")
  }

  render() {
    // console.log(this.state)
    return (
      <div className="book-container">
        <BookList books={this.state.books} clickHandler={this.clickHandler}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
