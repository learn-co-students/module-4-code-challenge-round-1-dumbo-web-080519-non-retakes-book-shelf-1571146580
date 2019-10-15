import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

 state = {
   books: []
 }

 componentDidMount(){
   fetch('http://localhost:3005/books')
   .then(r => r.json())
   .then(
     // console.log
     data => this.setState({
     books: data
      })
    )
 }

  render() {

    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books= {this.state.books} />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
