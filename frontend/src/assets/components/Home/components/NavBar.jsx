import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Umang</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/test">Take Test</Link>
      </div>
    </nav>
  );
}
