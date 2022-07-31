import React, { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateBook } from './BookSlice';

const EditBooks = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(updateBook({id, title, author}))
    navigate("/show-books", {replace:true})
  }
  
  return (
    <div>
      <h2>Edit Books</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-field">
          <label htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title} required />
        </div>
        <div className="form-field">
          <label htmlFor="author">author</label>
          <input onChange={(e) => setAuthor(e.target.value)} type="text" name="author" id="author" value={author} required />
        </div>
        <button>Update Book</button>
      </form>
    </div>
  );
};

export default EditBooks;