import React from "react";
import "./Footer.css";

/**
 * Component for showing the footer
 * Display copyrights
 *
 * @component
 */
class Footer extends React.Component{
    render() {
        return (
            <div>
                <footer className="footer">
                    <p className="footer-text">{this.props.text}</p>
                </footer>
            </div>
        );
    }
}

export default Footer ;