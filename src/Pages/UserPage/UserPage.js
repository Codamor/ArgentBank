import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import ProfileEditor from "../../Components/ProfileEditor/ProfileEditor";
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
        this.toggleProfileEditor = this.toggleProfileEditor.bind(this);
        this.state = {
            profileEditor: false,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
        };
    }

    render() {

        if(!this.props.isLoggedIn){
            return <Redirect to="/signin" />
        }

        return (
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back{this.props.name}</h1>

                    {
                        !this.state.profileEditor ?
                            (
                                <React.Fragment>

                                    <h2>{this.props.firstName} {this.props.lastName} !</h2>

                                    <button
                                        className="edit-button"
                                        onClick={()=> this.toggleProfileEditor()}
                                    >
                                        Edit Name
                                    </button>

                                </React.Fragment>
                            ) :
                            (
                                <ProfileEditor
                                    firstName={this.state.firstName + '!'}
                                    lastName={this.state.lastName}
                                    closeEditor={() => this.toggleProfileEditor()}
                                />
                            )
                    }



                </div>


                <h2 className="sr-only">Accounts</h2>

                <section className="account">

                </section>
            </main>

        )
    }

    componentDidUpdate() {
        if (this.state.firstName !== this.props.firstName) {
            this.setState({
                firstName: this.props.firstName,
            });
        }
        if (this.state.lastName !== this.props.lastName) {
            this.setState({
                lastName: this.props.lastName,
            });
        }
    }

    toggleProfileEditor() {
        this.setState({
            profileEditor: !this.state.profileEditor,
        });
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

UserPage.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}



export default connect(mapStateToProps)(UserPage) ;