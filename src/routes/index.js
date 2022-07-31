import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddBooks from '../features/books/AddBooks';
import BooksView from '../features/books/BooksView';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
