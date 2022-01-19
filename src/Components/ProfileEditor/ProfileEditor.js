import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateProfile} from "../../store/Actions/UserActions";

class ProfileEditor extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
        this.closeNameEditor = this.props.closeEditor.bind(this);
        this.state = {
            loading: false,
            editorFirstName: '',
            editorLastName: '',
        };
    }


    render() {
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;

        return (
            <React.Fragment>
                <div>
                    <div>
                        <input
                            placeholder={firstName}
                            type="text"
                            value={this.state.editorFirstName}
                            onChange={this.onChangeFirstName}
                        />
                        <input
                            placeholder={lastName}
                            type="text"
                            value={this.state.editorLastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="edit-button-group">
                        <button className="edit-button" onClick={() => this.handleProfileUpdate()}>Save</button>
                        <button className="edit-button" onClick={() => this.props.closeEditor()}>Cancel</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    handleProfileUpdate() {
        this.setState({
            loading: true,
        });

        const firstName = this.state.editorFirstName.length ? this.state.editorFirstName : this.props.firstName;
        const lastName = this.state.editorLastName.length ? this.state.editorLastName : this.props.lastName;

        this.props.updateProfile(firstName, lastName).then(() => {
            this.setState({
                loading: false,
            });
            this.closeNameEditor();
        });
    }

    onChangeFirstName(event) {
        this.setState({
            editorFirstName: event.target.value,
        });
    }

    onChangeLastName(event) {
        this.setState({
            editorLastName: event.target.value,
        });
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateProfile: (firstName, lastName) => dispatch(updateProfile(firstName, lastName))
    }
}


export default connect(null, mapDispatchToProps)(ProfileEditor);