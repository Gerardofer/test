import React, { Component } from "react";
import { connect } from "react-redux";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="main-content">
        <h3>{this.props.auth.userName}</h3>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
