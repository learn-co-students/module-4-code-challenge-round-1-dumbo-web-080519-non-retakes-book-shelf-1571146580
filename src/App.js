import React, { useState, useEffect } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Book from "./components/Book"
import Form from "./components/Form";

const API = "http://localhost:3005/books"

const App = () => {

  const [books, setBooks] = useState(null)
  const [shelf, setShelf] = useState([])

  useEffect(
    () => {
      fetch(API)
        .then(response => response.json())
        .then(bookArr => setBooks(bookArr))
    },
    []
  )

  const renderBooks = (bookArr) => {
    return bookArr.map(book => {
      return (
        <li 
          key={`book-list-${book.id}`}
          onClick={() => addToShelf(book)}
        >
          <Book book={book} />
        </li>
      )
    })
  }

  const renderShelf = (bookArr) => {
    return bookArr.map(book => {
      return (
        <li 
          key={`book-list-${book.id}`}
          onClick={() => removeFromShelf(book)}
        >
          <Book book={book} />
        </li>
      )
    })
  }

  const addToShelf = (book) => {
    !shelf.includes(book) ? 
      setShelf([...shelf, book]) 
    : 
      alert("You have already added this book to your shelf")
  }

  const removeFromShelf = (book) => {
    if (shelf.includes(book)) {
      const bookIndex = shelf.indexOf(book) 
      const shelfCopy = shelf
      shelfCopy.splice(bookIndex, 1)
      setShelf([...shelfCopy])
    } else {
      alert("This book is not in your shelf, how did you even click this?")
    }
  }

  const addNewBook = (bookObj) => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bookObj)
    })
      .then(response => response.json())
      .then(newBook => setBooks([...books, newBook]))
  }

  return (
    <>
    <Form addNewBook={addNewBook} />
    <div className="book-container">
        {books ? 
          <BookList
            books={books}
            renderBooks={renderBooks}
          /> 
          : <div>...loading</div>
        }
        <Bookshelf
          shelf={shelf}
          renderShelf={renderShelf}
        />
    </div>
    </>
  )
}

export default App;
