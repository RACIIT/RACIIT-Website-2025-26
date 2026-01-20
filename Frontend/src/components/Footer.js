import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added
import './Footer.css';
import logo from '../assets/Logo.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // All avenues with proper paths
  const avenues = [
    { name: 'Club Service', path: '/club-service' },
    { name: 'Community Service', path: '/community-service' },
    { name: 'International Service', path: '/international-service' },
    { name: 'Professional Development', path: '/professional-development' },
    { name: 'Sport', path: '/sport' },
    { name: 'Public Relation', path: '/public-relation' },
    { name: 'Digital Communication', path: '/digital-communications' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-section about">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Rotaract Club</h2>
          <p>
            Empowering young professionals to create positive change in their communities through
            service, leadership, and global connections.
          </p>
          <div className="social-icons">
            <a href="https://web.facebook.com/iitrotaract/?_rdc=1&_rdr#" aria-label="Facebook" className="social-icon facebook" />
            <a href="#" aria-label="Twitter" className="social-icon twitter" />
            <a href="https://www.instagram.com/rotaract_iit/" aria-label="Instagram" className="social-icon instagram" />
            <a href="https://my.linkedin.com/company/rotaract-club-of-iit" aria-label="LinkedIn" className="social-icon linkedin" />
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section avenues">
          <h3>Avenues</h3>
          <ul>
            {avenues.map(({ name, path }) => (
              <li key={name}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>57 Ramakrishna Rd, Colombo 00600</p>
          <p>+94 76 536 8956</p>
          <p>rciit.3220@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} RACIIT. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
