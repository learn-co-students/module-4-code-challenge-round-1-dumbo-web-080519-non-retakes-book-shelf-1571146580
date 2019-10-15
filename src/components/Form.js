import React from "react";

 let defaultState = {
    title: "",
    author: "",
    img: ""
}

class Form extends React.Component {

  state = defaultState

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  submitForm = (evt) => {
    evt.preventDefault()
    this.props.formSubmit(this.state)
    this.setState(defaultState)
  }


  render() {
    return (
    <h1>
      {
      <form onSubmit={ this.submitForm }>
        <input onChange={this.handleChange} type="text" name="title" value={this.state.title} placeholder="title"></input>
        <input onChange={this.handleChange} type="text" name="author" value={this.state.author} placeholder="author"></input>
        <input onChange={this.handleChange} type="text" name="img" value={this.state.img} placeholder="img"></input>
        <input type="submit"></input>
      </form>
      }
    </h1> )
  }
}

export default Form;
