import React, { useContext, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from "../../Context/ShopContext.jsx";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      {/* Logo Section */}
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOP-IT</p>
      </div>

      {/* Hamburger Menu (Visible on Mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li onClick={() => { setMenu("shop"); setMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens"); setMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women"); setMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); setMenuOpen(false); }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      {/* Login & Cart Section */}
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token') ? (
          <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/'); }}>Logout</button>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
