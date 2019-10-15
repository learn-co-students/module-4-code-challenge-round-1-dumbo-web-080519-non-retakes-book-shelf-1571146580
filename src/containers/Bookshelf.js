import React from "react";

const Bookshelf = ({shelf, renderShelf}) => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderShelf(shelf)}</ul>
    </div>
  );
};

export default Bookshelf;
