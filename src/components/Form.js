import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: '',
  }

  onChange = evt => {
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onSubmit = evt => {
    evt.preventDefault();
    const { title, author, img } = evt.target
    // console.log(title, author, img);
    // console.log(evt.target);
    this.props.handleAddBook(title.value, author.value, img.value)
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {

    const { state: {title, author, img},
            onChange,
            onSubmit } = this;

    return (
      <h1>
        < form onChange={ onChange } onSubmit={ onSubmit }>
          < input type='text' name='title' value={ title } placeholder='title' />
          < input type='text' name= 'author' value={ author } placeholder= 'author' />
          < input type='text' name='img' value={ img } placeholder='img' />
          < input type='submit' />
        </ form >
      </h1>
  )
  }
}

export default Form;
