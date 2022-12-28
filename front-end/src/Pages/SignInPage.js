import React from "react";
import SignIn from "../Components/SignIn/SignIn";

/**
 * Component for showing the Sign In page
 * Display the SignIn component
 *
 * @component
 */
class SignInPage extends React.Component{
    render() {
        return (
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>

                    <SignIn />

                </section>
            </main>
        );
    }
}

export default SignInPage ;