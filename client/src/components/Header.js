import React, { Component } from "react";
import GoogleAuth from "../img/googleLogin.png";
import Sevafund from "../img/SevaFund_logo.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              <img
                className="google-auth"
                src={GoogleAuth}
                alt="Google Login"
              />
            </a>
          </li>
        );
      default:
        return (
          <div>
            <ul>
              <li>
                <a href="/api/logout">Log out</a>
              </li>
              <li>
                <Link to="/user_profile">Profile</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to={this.props.auth ? "/type" : "/"} className="brand-logo">
              <img src={Sevafund} alt="SevaFund" />
            </Link>
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
