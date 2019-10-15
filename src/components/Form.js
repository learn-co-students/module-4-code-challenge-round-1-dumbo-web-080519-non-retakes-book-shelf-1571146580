import React from "react";

class Form extends React.Component {
  render() {
    return (
    <div>
     <h1>Book Form</h1>
      <form onChange={this.props.formHandler}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Author:
          <input type="text" name="author" />
        </label>
        <label>
          Image:
          <input type="text" name="img" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default Form;
