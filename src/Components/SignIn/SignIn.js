import React from "react";
import "./SignIn.css" ;

/**
 * Component for showing the sign in form
 * Display a form
 *
 * @component
 */
class SignIn extends React.Component{
    render() {
        return (
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password"/>
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me"/>
                    <label htmlFor="remember-me">Remember me</label
                >
                </div>
                <a href="./user.html" className="sign-in-button">Sign In</a>
            </form>
        );
    }
}

export default SignIn ;