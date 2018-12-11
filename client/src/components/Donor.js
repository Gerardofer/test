import React, { Component } from 'react';
import { connect } from 'react-redux';
import DonorInfo from "./DonorInfo";
import "./donor.css"

class Donor extends Component {
    render() {
        return (
            <div id="donor" className="container">
                <div className="row">
                    <h5>Thank you for signing up using Google, {this.props.auth.userName}, please fill out the following information in order to complete your SevaFund profile</h5>
                    <DonorInfo />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Donor);