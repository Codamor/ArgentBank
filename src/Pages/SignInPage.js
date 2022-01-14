import React from "react";
import PropTypes from "prop-types";

/**
 * Component for showing the Sign In page
 * Display the SignIn component
 *
 * @component
 */
class SignInPage extends React.Component{
    render() {
        return (
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                {
                    this.props.children
                }

            </section>
        );
    }
}

SignInPage.propTypes = {
    children: PropTypes.node.isRequired
}

export default SignInPage ;