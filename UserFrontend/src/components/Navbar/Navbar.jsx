import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin, totalCartItems, token, setToken }) => {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className='navbar'>
      <Link to="/" className='logo' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        SERENE
      </Link>

      <ul className='mid'>
        <li className={page === "home" ? 'active' : ''}>
          <Link to="/" onClick={() => setPage("home")}>
            <button className='top'>Home</button>
          </Link>
        </li>
        <li className={page === "ingredients" ? 'active' : ''}>
          <Link to="/Ing" onClick={() => setPage("ingredients")}>
            <button className='top'>Ingredients</button>
          </Link>
        </li>
        <li className={page === "about-us" ? 'active' : ''}>
          <Link to="/Abt" onClick={() => setPage("about-us")}>
            <button className='top'>About Us</button>
          </Link>
        </li>
      </ul>

      <div className='navbar-r'>
        <Link to="/cart" className='nav-cart'>
          <i className="fas fa-shopping-cart icon"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          {totalCartItems > 0 && <div className='dot'></div>}
        </Link>

        {!token ? (
          <button className='but' onClick={() => setShowLogin(true)}>Sign Up</button>
        ) : (
          <div className='profile-menu'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
            <ul className="profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <i className="fas fa-box"></i> Orders
              </li>
              <li onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
