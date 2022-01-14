import React from "react";
import PropTypes from "prop-types";

/**
 * Component for showing the home page
 * Display Hero and Features components
 *
 * @component
 */
class HomePage extends React.Component{
    render() {
        return (
            <React.Fragment>
                {
                    this.props.children
                }

            </React.Fragment>
        );
    }
}

HomePage.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomePage ;