import React from "react";
import PropTypes from "prop-types" ;
import "./Features.css" ;

/**
 * Component for showing features items
 * Display one or more items
 *
 * @component
 */

class Feature extends React.Component{
    render() {
        return (
            <section className="features">
                <h2 className="sr-only">Features</h2>

                {
                    this.props.children
                }
            </section>
        );
    }
}

Feature.propTpes = {
    children: PropTypes.node.isRequired
}

export default Feature ;