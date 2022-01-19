import React from "react";
import {connect} from "react-redux";
import PropTypes, {func} from "prop-types";

import "./UserPage.css" ;

/**
 * Component for showing the UserPage component
 * Display a header and an account list
 *
 * @component
 */
class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profileEdition: false,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
        };
    }

    render() {
        return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back{this.props.name}</h1>
                    <h2>{this.props.firstName} {this.props.lastName} !</h2>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>

                <section className="account">



                </section>
            </main>

        )
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { firstName, lastName } = state.userProfile;
    return {
        isLoggedIn,
        firstName,
        lastName,
    };
}


export default connect(mapStateToProps)(UserPage) ;