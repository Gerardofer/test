import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.auth.userName}</h3>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
