import React, { Component } from "react";
import Sevafund from "../img/SevaFund_logo.png";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img src={Sevafund} alt="SevaFund" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/login">Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
