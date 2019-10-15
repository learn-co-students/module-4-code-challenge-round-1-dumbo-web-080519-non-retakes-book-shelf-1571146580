import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const url = "http://localhost:3005/books"

class App extends Component {
  state ={
    bookArr: [],
    bookshelfList: []
  }

  componentDidMount(){
    fetch(url).then(r => r.json()).then(bookArr => this.setState({bookArr}))
  }

  handleBookClick= (book)=>{
    if(!this.state.bookshelfList.includes(book)){
        return this.setState({
          bookshelfList: [...this.state.bookshelfList, book]
        })
    }
    return alert("Books Already in the Bookshelf")
  }

  removeBook =(id) =>{
    console.log(id)
  }

  handelSubmit=(newBook)=>{
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newBook)
    }).then(r=>r.json())
    .then(newBookObj => {
      return this.setState({
        bookArr: [...this.state.bookArr, newBookObj]
      })
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList list={this.state.bookArr} handleBookClick={this.handleBookClick} handelSubmit={this.handelSubmit}/>
        <Bookshelf placeBooks={this.state.bookshelfList} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
