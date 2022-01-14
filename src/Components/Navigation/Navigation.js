import React from "react";
import "./Navigation.css" ;
import argenBankLogo from "../../assets/img/argentBankLogo.png"

/**
 * Component for showing the Navigation
 * Display a logo and a menu
 *
 * @component
 */

class Navigation extends React.Component{
    render() {
        return (
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src={argenBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navigation ;