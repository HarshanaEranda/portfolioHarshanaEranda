import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/molecules/navigation.css'; // Import the custom styles

const NavigationBar = () => {
  return (
    <nav >
        <div className="nav-container">
          <div>
            <Link to="/" className="nav-brand">
              Portfolio
            </Link>
          </div>
          <div className="nav-menu">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/skills" className="nav-link">
              Skills
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default NavigationBar;