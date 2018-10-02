import React, { Component } from "react";
import NumberFormat from "react-number-format";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      phone: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      address: "",
      phone: "",
      email: ""
    });
  }

  render() {
    return (
      <div className="row">
        <form className=" col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s4">
              <input
                value={this.state.address}
                name="address"
                onChange={this.handleChange}
                id="address"
                type="text"
                className="validate"
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="input-field col s4">
              <NumberFormat
                format="+1 (###) ###-####"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
                id="phone"
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s4">
              <input
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                id="email"
                type="text"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
