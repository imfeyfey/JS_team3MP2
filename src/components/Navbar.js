import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <a href="index.html" class="logo">
            BABY E-Konsulta SYSTEM
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a class="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">Services</a>
              </li>
              <li>
                <a href="index.html">Contact</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
