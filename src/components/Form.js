import React, {useState} from "react";

const Form = ({addNewBook}) => {
  const defaultDraft = {title: "", author: "", img: ""}
  const [draft, setDraft] = useState(defaultDraft)
  const {title, author, img} = draft

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewBook(draft)
    setDraft(defaultDraft)
  }

  return (
    <>
      <h1 className="form-title">Add a New Book</h1>

      <form onSubmit={handleSubmit} >
        <table>
          <tr>
            <td><label>Title</label></td>
            <td>
              <input 
                onChange={(event) => setDraft({title: event.target.value, author, img})} 
                type="textfield" 
                value={title} />
            </td>
          </tr>
          <tr>
          <td><label>Author</label></td>
          <td>
            <input 
              onChange={(event) => setDraft({author: event.target.value, title, img})} 
              type="textfield" 
              value={author} />  
          </td>
          </tr>
          <tr>
          <td><label>Cover Image Url</label></td>
          <td>
            <input 
              onChange={(event) => setDraft({img: event.target.value, title, author})} 
              type="textfield" 
              value={img} />
          </td>
          </tr>
          </table>


        <input type="submit" />
      </form>
    </>
  )
}

export default Form;
