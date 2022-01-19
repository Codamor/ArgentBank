import React from "react";
import {connect} from "react-redux";
import {logout} from "../../store/Actions/AuthActions";
import {Link, NavLink} from "react-router-dom";
import "./Navigation.css" ;
import argentBankLogo from "../../assets/img/argentBankLogo.png"

/**
 * Component for showing the Navigation
 * Display a logo and a menu
 *
 * @component
 */

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            loggedUser: this.props.isLoggedIn,
            userFirstName: this.props.firstName,
        };
    }

    render() {
        return (
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>


                <div>
                    {
                        !this.state.loggedUser && (
                        <Link to="signin" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                        )
                    }

                    {
                        this.state.loggedUser && (
                            <div className="main-nav-item main-nav-login">

                                <NavLink to="/profile" className=" main-nav-isActive">
                                    <i className="fa fa-user-circle"></i>
                                    {this.state.userFirstName}
                                </NavLink>

                                <NavLink to="/signin" onClick={() => this.handleLogout()}>
                                    <i class="fas fa-sign-out-alt"></i>
                                    Sign Out
                                </NavLink>

                            </div>




                        )
                    }

                </div>


            </nav>
        );
    }

    componentDidUpdate() {
        if (this.state.loggedUser !== this.props.isLoggedIn) {
            this.setState({
                loggedUser: this.props.isLoggedIn,
            });
        }
        if (this.state.userFirstName !== this.props.firstName && this.props.isLoggedIn) {
            this.setState({
                userFirstName: this.props.firstName,
            });
        }
    }

    handleLogout() {
        const { dispatch } = this.props;
        dispatch(logout());
    }


}



function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { firstName } = state.userProfile;
    return {
        isLoggedIn,
        firstName,
    };
}


export default connect(mapStateToProps)(Navigation) ;