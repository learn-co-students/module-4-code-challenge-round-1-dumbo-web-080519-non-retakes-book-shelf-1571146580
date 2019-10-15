import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state  = {
    books: [],
    book: [],
    title: "",
    author: "",
    img: ""
  }



  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res=>res.json())
    .then(books => {
      this.setState({books})
    })
  }

  handleBookButton =(book)=>{
    this.setState({
    book
    })
  }

  handleChange = (event) =>{
    event.preventDefault()
    this.setState({
      title:event.target.value,
      author:event.target.author,
      img: event.target.img
    })
   console.log(event.target.value)
 }
  render() {
    // console.log(this.state.books)

    return (

      <div className="book-container">
        <BookList handleChange={this.handleChange}
        bookList={this.state.books}
        handleBookButton={this.handleBookButton} />
        <Bookshelf book={this.state.book}/>
      </div>
    );
  }
}

export default App;
