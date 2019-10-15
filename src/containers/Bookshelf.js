import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  function renderBooks() {
    const { booksOnBookshelf, handleClickOnBook } = props
    // console.log(booksOnBookshelf);
    // console.log(props);
    return booksOnBookshelf.map(book => {
      return < Book key={ book.id }
                    book={ book }
                    handleClickOnBook={ handleClickOnBook }
                    newOnShelfValueIfClicked={ false } />
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{ renderBooks() }</ul>
    </div>
  );
};

export default Bookshelf;
