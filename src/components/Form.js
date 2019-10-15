import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBookByForm(this.state)
  }

  render() {
    return (
      <div>
        <h1>Add new book!</h1>
          <form onChange={this.handleFormChange} onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
              <input type="text" name="title" value={this.state.title} />
            <label htmlFor="author">Author</label>
              <input type="text" name="author" value={this.state.author} />
            <label htmlFor="img">IMG URL</label>
              <input type="text" name="img" value={this.state.img} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
  }
}

export default Form;
