import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin_token"); // optional cleanup
    window.location.href = "https://sereneuser.onrender.com/"; // redirect to user site
  };

  return (
    <div className='navbar'>
      <Link to="/" className="logo-link">
        <p className='logo'>SERENE</p>
      </Link>

      <div className="profile-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <i className="fas fa-user"></i>
        {dropdownOpen && (
          <ul className="profile-dropdown">
            <li onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
