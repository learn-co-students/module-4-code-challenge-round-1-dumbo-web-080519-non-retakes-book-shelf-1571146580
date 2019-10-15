import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    this.props.addToBookList(this.state)
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }

  render() {
    return <h1>
      {
        <form onChange={this.onChange} onSubmit={this.onSubmit}>
          <input type="text" name="title" placeholder="Title"/>
          <input type="text" name="author" placeholder="Author"/>
          <input type="text" name="img" placeholder="Image URL"/>
          <input className="submitBtn" type="submit" style={{borderRadius: 4 + "px"}}/>
        </form>
      }
    </h1>;
  }
}

export default Form;
