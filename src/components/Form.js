import React from "react";

class Form extends React.Component {
  state={
    title: "",
    author: "",
    img: ""
  }

  handleChange = (evt) => {
    return this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handle = (evt) =>{
    evt.preventDefault()
    return this.props.handelSubmit(this.state)
  }
  render() {
    return <h1>{
      <form onChange={this.handleChange} onSubmit={this.handle}>
        <input type="text" name="title" value={this.state.title}/>
        <input type="text" name="author" value={this.state.author}/>
        <input type="text" name="img" value={this.state.img}/>
        <input type="submit" />
      </form>
    }</h1>;
  }
}

export default Form;
