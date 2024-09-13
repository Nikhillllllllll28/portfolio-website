// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import a CSS file for custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className='navbar-image'></span>
          <span className="navbar-name">Nikhil Mishra</span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <button className="btn-66">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <button className="btn-66">About</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                <button class="btn-66">Projects</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <button class="btn-66">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
