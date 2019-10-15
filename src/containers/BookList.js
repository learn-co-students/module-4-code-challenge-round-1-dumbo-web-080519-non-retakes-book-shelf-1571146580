import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

 state = {
   
   title: '',
   author: '',
   img: ''
 } 
  
  clickHandler = () => {
    console.log("i was clicked and i should move over to the shelf")
  }

  bookList = () => {
  return this.props.books.map((bookObj) => 
    <Book clickHandler={this.clickHandler} book={bookObj} key={`book-${bookObj.id}` }/>
    // console.log(book)
    )
    
  }

  formHandler = (evt) => {
    this.setstate({
      [evt.target.name]: evt.target.value
    })
  }
  
  formSubmit = (book) 

  render() {
    // console.log(this.bookList())
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form formHandler={this.formHandler}/>
        <ul>
     
        {this.bookList()}
        </ul>
      </div>
    );
  }
}

export default BookList;
