import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author:'',
    img: ''
  }

  render() {

    let changeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;


      this.setState({
      name: value
    })
    }

    // authorHandler(event){}

    let handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name;
    const value = event.target.value;


    this.setState({
    name: value
    })
    // console.log("submit button clicked")
    }

    return <h1>{
    <form onSubmit={this.handleSubmit}>
        Title:
        <input type="text"
                name = "title"
               // value={this.state.title}
               onChange={this.changeHandler}
        />
        Author:
        <input type="text"
                name = "author"
               // value={this.state.author}
               onChange={this.changehandler}
        />
        Image:
        <input type="text"
                name = "img"
               // value={this.state.img}
               onChange={this.changeHandler}
        />
        <input type="submit"/>
    </form>
    }</h1>;
  }
}

export default Form;
