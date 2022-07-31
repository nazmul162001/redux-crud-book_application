import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const numberOfBooks = useSelector((state)=> state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = {id: uuidv4(), title, author}
    dispatch(addBook(book))
    navigate("/show-books", {replace: true});
  }
  
  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title} required />
        </div>
        <div className="form-field">
          <label htmlFor="author">author</label>
          <input onChange={(e) => setAuthor(e.target.value)} type="text" name="author" id="author" value={author} required />
        </div>
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;