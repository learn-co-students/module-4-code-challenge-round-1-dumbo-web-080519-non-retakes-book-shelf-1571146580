import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


/* 1. Fetch to http://localhost:3005/books. You should get a response that is an array of multiple book objects that look like this:
{
   "id": 1,
   "title": "The Great Gatsby",
   "author": "F. Scott Fitzgerald",
   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg"
}*/

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(data => {
      this.setState({
        books: data
      }, () => {
        console.log("Hello from the setState!", this.state);
      });
    });
  }
/* 2. Render a list of books that show the book title and book image in the Book List */

/* 3. Clicking on a book in the Book List should add it to the Bookshelf */

handleBookListClick(event) => {
   /*this.setState({
     bookShelf: [...bookShelf, event.target.value]
   })*/
   this.setState({bookShelf: event.currentTarget.value});
   console.log(this.state.event.currentTarget.value)
}

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleBookListClick={this.state.handleBookListClick}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
