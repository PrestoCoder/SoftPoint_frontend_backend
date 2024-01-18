import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/List">List</Link></li>
          <li><Link to="/Update">Update</Link></li>
          <li><Link to="/Delete">Delete</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
