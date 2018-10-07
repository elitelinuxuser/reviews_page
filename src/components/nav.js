import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            Buy
            <span>Reviews</span>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
