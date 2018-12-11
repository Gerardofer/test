import React, { Component } from "react";
import NumberFormat from "react-number-format";
import axios from "axios";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    axios.get('/api/new_donor')
      .then(res => {
        const person = res.data;
        this.setState({ person });
      })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s6">
            <p>Address: </p>
          </div>
          <div className="col s6">
            <ul>{this.state.person.map(persons => <p>{persons.address}, {persons.city}, {persons.$state} {persons.zipcode}</p>)}</ul>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <p>Email: </p>
          </div>
          <div className="col s6">
            <ul>{this.state.person.map(persons => <p>{persons.email}</p>)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
