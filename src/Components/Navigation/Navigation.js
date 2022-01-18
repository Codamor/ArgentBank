import React from "react";
import {Link} from "react-router-dom";
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
                <Link to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={argenBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to="signin" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navigation ;