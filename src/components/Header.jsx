import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;