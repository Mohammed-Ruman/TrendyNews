import React, { Component } from "react";
import icon from "../pageicon.gif";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg  "
        style={{
          backgroundImage: "linear-gradient(to right, #4ca1af,#2c3e50)",
        }}
      >
        <img src={icon} alt="" />
        <div className="container-fluid ">
          <Link className="navbar-brand text-white " to="/">
            TrendyNews
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link className="nav-link text-white" to="/business">
                  Business
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/health">
                  Health
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/science">
                  Science
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/sports">
                  Sports
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
