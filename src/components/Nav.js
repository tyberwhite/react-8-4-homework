import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <div className="logo">Stonks R' Us</div>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/stocks">Stonks</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
