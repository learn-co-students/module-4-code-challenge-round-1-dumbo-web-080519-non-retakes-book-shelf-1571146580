import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


render() {
  console.log("Hi from the BookList!", this.props);

   const { title, author, img, id } = this.props.books

   const renderBooks = this.props.books.map((book) =>
   <Book
     key={book.id}
     id={book.id}
     title={book.title}
     author={book.author}
     img={book.img}
     />
   );

   /*const renderBooks = () => {
       return
          <>
            {books.map(book =>
              return
              <Book
                book={book}
                key={book.id}
                author={author}
                img={img}
                title={title}
                />
          </>
            )}
        }
   }*/

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{renderBooks}</ul>
      </div>
    );
  }

}

export default BookList;
