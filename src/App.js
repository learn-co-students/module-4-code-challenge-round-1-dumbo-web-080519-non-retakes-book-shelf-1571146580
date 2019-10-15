import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";







class App extends Component {

  state = {
    title: [],
    author: [],
    img: []
  }

  componentDidMount() {
    fetch(`http://localhost:3005/books`)
      .then(res => res.json())
      .then(data => {data.map(data => {
        this.setState({
          title: data.title,
          author: data.author,
          img: data.img
        })
      })
      })

  }


  render() {
    return (
      <div className="book-container">
        <BookList renderBooks={this.state}/>
        <Bookshelf />
      </div>
    );
  }
}

export default App;
