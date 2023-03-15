import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <ul>
            <li className="Title">
              <Link to="/Landing">Le መኖር</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul>
            <li className="sub">
              <Link to="/Landing">Home</Link>
            </li>

            <li className="sub">
              <Link to="/Services">Services</Link>
            </li>

            <li className="sub">
              <Link to="/Volunter">Volunter</Link>
            </li>

            <li className="sub">
              <Link to="/blog">Blogs</Link>
            </li>

            <li className="sub">
              <Link to="/About">About</Link>
            </li>

            <li className="sub">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="sub">
              <Link to="/donation">Donation</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
