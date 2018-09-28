import React, { Component } from "react";
import Sevafund from "../img/SevaFund_logo.png";
import { connect } from "react-redux";
import "./header.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img src={Sevafund} alt="SevaFund" />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
