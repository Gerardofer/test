import React, { Component } from "react";
// import donor from "../img/donor-pic.jpeg";
import "./type.css";

class Type extends Component {
  render() {
    return (
      <div id="type" className="container">
        <div className="row">
          <div className="col s12 m6">
            <div id="org" className="card medium">
              <div className="card-action center">
                <a href="/org">Organization</a>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div id="donorImg" className="card medium">
              <div className="card-action center">
                <a href="/donor">Donor</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Type;
