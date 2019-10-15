import React from "react";

const Book = props => {
  let { title, img} = props.data
  return (
    <div onClick={() => props.click(props.data)}>
      <h2>{ title }</h2>
      {<img src={img} alt={title}/>}
    </div>
  );
};

export default Book;
