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
            <main>
                {
                    this.props.children
                }

            </main>
        );
    }
}

HomePage.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomePage ;