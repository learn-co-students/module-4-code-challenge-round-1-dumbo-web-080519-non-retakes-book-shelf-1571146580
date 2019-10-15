import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

// class BookList extends Component {
//
//   renderBooks = () => {
//     const { bookList, handleClickOnBook } = this.props
//     return bookList.map(book => {
//       return < Book key={ book.id }
//                     book={ book }
//                     handleClickOnBook={ handleClickOnBook }
//                     newOnShelfValueIfClicked={ true } />
//     })
//   }
//
//   render() {
//     // console.log(this.props.bookList);
//     const { props: {handleAddBook}, renderBooks } = this;
//
//     return (
//       <div className="book-list">
//         <h1>Book List</h1>
//         <Form handleAddBook={ handleAddBook }/>
//         <ul>{ renderBooks() }</ul>
//       </div>
//     );
//   }
// }

const BookList = props => {

  function renderBooks() {
    const { bookList, handleClickOnBook } = props
    return bookList.map(book => {
      return < Book key={ book.id }
                    book={ book }
                    handleClickOnBook={ handleClickOnBook }
                    newOnShelfValueIfClicked={ true } />
    })
  }


  const { handleAddBook } = props;

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <Form handleAddBook={ handleAddBook }/>
      <ul>{ renderBooks() }</ul>
    </div>
  );
}

export default BookList;
