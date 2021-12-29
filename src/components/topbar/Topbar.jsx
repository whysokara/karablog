import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-p"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/logout" className="link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
