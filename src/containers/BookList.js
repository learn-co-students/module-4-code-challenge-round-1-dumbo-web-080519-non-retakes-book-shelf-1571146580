import React from "react";

const BookList = ({books, renderBooks}) => {
  return (
    <div className="book-list">
        <h1>Book List</h1>
        <ul>{renderBooks(books)}</ul>
    </div>
  )
}

export default BookList;
