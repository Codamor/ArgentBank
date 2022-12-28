import React from "react";
import PropTypes from "prop-types";

import "./Account.css" ;

/**
 * Component for showing an user account
 * Display an account item with user data and transaction button
 *
 * @component
 */
class Account extends React.Component{
    render() {
        return (
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        {this.props.title}
                    </h3>
                    <p className="account-amount">{this.props.amount}</p>
                    <p className="account-amount-description">{this.props.description}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        );
    }
}

Account.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string
}

export default Account ;