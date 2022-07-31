import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='nav-link'>Home</Link>
      <Link to="/show-books" className='nav-link'>Show Books</Link>
      <Link to="/add-books" className='nav-link'>Add Books</Link>
    </nav>
  );
};

export default Navbar;