import React from "react";
import PropTypes from "prop-types";

import "./Item.css"

/**
 * Component for showing an item
 * Display an icon, a title and a text
 *
 * @component
 */
class Item extends React.Component{
    render() {
        return (
            <div>
                <div className="feature-item">
                    <img src={this.props.icon} alt="Chat Icon" className="feature-icon"/>
                    <h3 className="feature-item-title">{this.props.title}</h3>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Item ;