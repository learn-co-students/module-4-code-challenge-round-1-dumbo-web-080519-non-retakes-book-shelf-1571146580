import React from "react";
import Book from "../components/Book";

class Form extends React.Component {

  state = {
    title: "book title",
    image: "image url"
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    console.log("submit")
    event.preventDefault()
    let bookObj = {
      title: this.state.title,
      img: this.state.image
    }
    this.props.addBook(bookObj)
  }

  render() {
    return (
    <form onSubmit={ this.handleSubmit }>
        <input type="text" value={ this.state.title } name="title" onChange={ this.handleChange }/>
        <input type="text" value={ this.state.image } name="image" onChange={ this.handleChange }/>
        <input type="submit" />
    </form>
    )
  }
}

export default Form;
