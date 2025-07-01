import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="ft-content">
        
        <div className="ft-about"> 
          <h3>Serene</h3>
          <p>
            Dedicated to creating moments of calm through exceptional haircare.
            Discover beauty that nurtures your well-being.
          </p>
          <div className="socials"> 
            <a href="[https://facebook.com](https://facebook.com)" target="_blank" ><i className="fab fa-facebook-f"></i></a>
            <a href="[https://instagram.com](https://instagram.com)" target="_blank" ><i className="fab fa-instagram"></i></a>
            <a href="[https://twitter.com](https://twitter.com)" target="_blank" ><i className="fab fa-twitter"></i></a>
          </div>
        </div>

   
        <div className="ft-links"> 
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
            <li><Link to="/Ing" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Ingredients</Link></li>
            <li><Link to="/abt" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
            <li><Link to="/cart" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Cart</Link></li>
          </ul>
        </div>

  
        <div className="ft-contact"> 
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@serene.com">info@serene.com</a></p>
          <p>Phone:+91 1234567890</p>
          <p>Chennai</p>
        </div>
      </div>

      <div className="ft-bottom">
        <p>© 2025 SERENE Haircare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
