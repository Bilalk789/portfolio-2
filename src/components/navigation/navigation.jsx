import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <button>About Me</button>
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link">
            <button>Portfolio</button>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <button>Contact</button>
          </Link>
        </li>
        <li>
          <Link to="/resume" className="nav-link">
            <button>Resume</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
