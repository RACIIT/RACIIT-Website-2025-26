import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState('Home');
  const [avenuesOpen, setAvenuesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    if (path === '/') setActive('Home');
    else if (
      path.startsWith('/club-service') ||
      path.startsWith('/community-service') ||
      path.startsWith('/international-service') ||
      path.startsWith('/professional-development') ||
      path.startsWith('/sport') ||
      path.startsWith('/public-relation') ||
      path.startsWith('/digital-communications')
    ) setActive('Avenues');
    else if (path.startsWith('/about') || path.startsWith('/annual-report')) setActive('About');
    else setActive('');
  }, [location]);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-menu">
        <li className={`nav-item ${active === 'Home' ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
        </li>

        {/* Avenues Dropdown */}
        <li
          className={`nav-item dropdown ${avenuesOpen ? 'open' : ''} ${active === 'Avenues' ? 'active' : ''}`}
          onMouseEnter={() => setAvenuesOpen(true)}
          onMouseLeave={() => setAvenuesOpen(false)}
        >
          <span className="dropdown-toggle">Avenues <span className="arrow">&#x25BE;</span></span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/club-service" className="nav-link">Club Service</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/community-service" className="nav-link">Community Service</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/international-service" className="nav-link">International Service</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/professional-development" className="nav-link">Professional Development</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/sport" className="nav-link">Sport</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/public-relation" className="nav-link">Public Relation</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/digital-communications" className="nav-link">Digital Communication</Link>
            </li>
          </ul>
        </li>

        {/* Featured (non-dropdown) */}
        <li className={`nav-item ${active === 'Featured' ? 'active' : ''}`}>
          <span className="nav-link">Featured</span>
        </li>

        {/* About Dropdown */}
        <li
          className={`nav-item dropdown ${aboutOpen ? 'open' : ''} ${active === 'About' ? 'active' : ''}`}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <span className="dropdown-toggle">About <span className="arrow">&#x25BE;</span></span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/annual-report" className="nav-link">Annual Report</Link>
            </li>
          </ul>
        </li>

        {/* External Blog Link */}
        <li className="nav-item main-site">
          <a
            href="https://blog-site-git-main-ahils-projects-c4f544ca.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Blog Site
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
