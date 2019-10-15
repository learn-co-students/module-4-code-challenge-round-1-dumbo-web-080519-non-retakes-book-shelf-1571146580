import React from "react";

class Form extends React.Component {
  render() {
    console.log("hey")
    return <form>
      <input onChange={this.props.handleChange} type="text" placeholder="title"/>
      <input onChange={this.props.handleChange} type="text" placeholder="author"/>
      <input onChange={this.props.handleChange} type="text" placeholder="img"/>
      <input type="submit"/>
    </form>;
  }
}

export default Form;
