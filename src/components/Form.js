import React from "react";
import uuid from "uuid";


class Form extends React.Component {
  

  //state  = book here
  // nevermind, state cant be passed...
  state={
    uuid: "",
    title: "",
    author: "",
    img: ""
  }

  changeHandler = event => {
      
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
          [name]: value,
          [uuid]: uuid.v4()
        });
  
}

//submit function should be in app to add to state.books 


  render() {
    
    return <h1>{
      <form onSubmit={this.props.handleSubmit()}>
         <input type="text" 
                 name="title"   
                 value={this.state.title} 
                 onChange={this.changeHandler} 
          />
            <input type="text" 
                 name="author"   
                 value={this.state.author} 
                 onChange={this.changeHandler} 
          />
            <input type="text" 
                 name="img"   
                 value={this.state.img} 
                 onChange={this.changeHandler} 
          />
          <input type="submit" value="Submit" />
      </form>
    }</h1>;
  }
}

export default Form;
