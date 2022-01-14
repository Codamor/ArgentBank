import React from "react";
import PropTypes from "prop-types";

import "./UserPage.css" ;

/**
 * Component for showing the UserPage component
 * Display a header and an account list
 *
 * @component
 */
class UserPage extends React.Component{
    render() {
        return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br/>{this.props.name}</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>

                <section className="account">



                </section>
            </main>

        )
    }
}


export default UserPage ;