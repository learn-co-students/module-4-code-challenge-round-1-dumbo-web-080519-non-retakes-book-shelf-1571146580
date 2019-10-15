import React from "react";

const Book = props => {

  const { book: {title, img, id}, handleClickOnBook, newOnShelfValueIfClicked } = props;
  // console.log(props);
  // console.log(title, img);

  function handleClick(evt) {
    handleClickOnBook(evt.target.id, newOnShelfValueIfClicked)
  }

  return (
    <div>
      <h2>{ title }</h2>
      <img src={ img } alt='book' id={ id } onClick={ handleClick }/>
    </div>
  );
};

export default Book;
