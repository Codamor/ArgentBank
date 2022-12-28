import React from "react";
import {connect} from "react-redux";
import {login} from "../../store/Actions/AuthActions";
import "./SignIn.css" ;
import {Redirect} from "react-router-dom";
import {fetchProfile} from "../../store/Actions/UserActions";

/**
 * Component for showing the sign in form
 * Display a form
 *
 * @component
 */
class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRememberMe = this.onChangeRememberMe.bind(this);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
            loading: false,
            showError: false,
        };
    }


    render() {

        if (this.props.isLoggedIn === true) {
            return <Redirect to="/profile" />
        }

        return (
            <form onSubmit={this.handleSignIn}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username"value={this.state.email} onChange={this.onChangeEmail} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" value={this.state.password} onChange={this.onChangePassword}/>
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                        checked={this.state.rememberMe}
                        onChange={this.onChangeRememberMe}
                    />
                    <label htmlFor="remember-me">
                        Remember me
                    </label
                >
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
                {this.state.showError && <div className="sign-in-error"> Signin failed: verify email and password </div>}
            </form>
        );
    }

    componentDidMount() {
        const savedUser = JSON.parse(localStorage.getItem('rememberedUser'));
        if (savedUser) {
            this.setState({
                email: savedUser.email,
                password: savedUser.password,
                rememberMe: true,
            });
        }
    }

    handleSignIn(event) {
        event.preventDefault();

        this.setState({
            loading: true,
        });


        this.props.login(this.state.email, this.state.password)
            .then(() => {
                if (this.state.rememberMe) {
                    const savedUser = { email: this.state.email, password: this.state.password };
                    localStorage.setItem('rememberedUser', JSON.stringify(savedUser));
                    this.setState({
                        loading: false,
                    });
                } else localStorage.removeItem('rememberedUser');
                this.props.fetchProfile()
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    showError: true,
                });
            });
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value,
            showError: false,
        });
    }

    onChangePassword(event) {
        this.setState({
            password: event.target.value,
            showError: false,
        });
    }

    onChangeRememberMe(event) {
        this.setState({
            rememberMe: event.target.value,
        });
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const userProfile = state.userProfile
    return {
        isLoggedIn,
        userProfile
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchProfile: () => dispatch(fetchProfile()),
        login: (email, password) => dispatch(login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn) ;