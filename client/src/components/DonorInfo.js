import React, { Component } from "react";
import NumberFormat from "react-number-format";
import axios from "axios";

class DonorInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            $state: "",
            zipcode: "",
            phone: "",
            email: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emptyForm = this.emptyForm.bind(this);

    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //empty form after submit
    emptyForm(event) {
        this.setState({
            address: "",
            city: "",
            $state: "",
            zipcode: "",
            phone: "",
            email: ""
        })
    }

    //handle the submit
    handleSubmit(event) {
        event.preventDefault();

        const payload = {
            address: this.state.address,
            city: this.state.city,
            $state: this.state.$state,
            zipcode: this.state.zipcode,
            phone: this.state.phone,
            email: this.state.email,
        }

        console.log(payload);

        axios.post("/api/new_donor", payload)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        //run emptyForm
        this.emptyForm()
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
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
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <input
                                value={this.state.city}
                                name="city"
                                onChange={this.handleChange}
                                id="city"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="address">City</label>
                        </div>

                        <div className="input-field col s3">
                            <input
                                value={this.state.$state}
                                name="$state"
                                onChange={this.handleChange}
                                id="$state"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="address">State</label>
                        </div>
                        <div className="input-field col s3">
                            <input
                                value={this.state.zipcode}
                                name="zipcode"
                                onChange={this.handleChange}
                                id="zipcode"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="address">Zipcode</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <NumberFormat
                                format="+1 (###) ###-####"
                                value={this.state.phone}
                                name="phone"
                                onChange={this.handleChange}
                                id="phone"
                            />
                            <label htmlFor="phone">Phone Number</label>
                        </div>

                        <div className="row">
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

export default DonorInfo;
