import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = "http://localhost:3005/books"

class App extends Component {

  //hold is the books user clicks to add to bookshelf
  state = {
    books:[],
    hold: []

  }

  //form
  handleSubmit=(event)=>{
    console.log("Handle Submit" , event.target.name)
    

  }

  addToBookshelf(book){
    console.log("ADDTOSHELF Book", book)
    console.log("Hold StateBefore Add ", this.state.hold)
  return(
    this.setState({
      hold:[...this.state.hold, book]  //error: cannot read hold undefined
    }))

  }

  handleDelete(event){
  
      var array = this.state.hold;
      var index = e.target.id; 
      delete array[index];
      this.setState({
        hold: [array]
      })
  }

  componentDidMount(){

    fetch(API)
    .then(res => res.json())
    .then(obj => this.setState({
        books:[...this.state.books, obj]  
    }))

    // console.log("Hold Mount:", this.state.hold)
    

  }

  render() {
    // console.log(this.state.books)  //check to see if fetch worked 
 
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleSubmit={this.handleSubmit} addToBookshelf={this.addToBookshelf}/> 
        {/* ^^ Pass a function to book list, to use in form  */}
        <Bookshelf hold={this.state.hold}/>
      </div>
    );
  }
}

export default App;
