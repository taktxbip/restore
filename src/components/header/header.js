import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ numItems, total }) => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">ReStore</Link>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Catalog</Link>
          </li>
        </ul>
      </nav>
      <Link to="/cart/" className="header-cart">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        <span className="cart-label">Cart</span>
        <span className="cart-counter">${total} ({numItems})</span>
      </Link>
    </header>
  );
};

export default Header;
