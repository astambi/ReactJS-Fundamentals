import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/header.css";
import Logout from "../user/Logout";

export default class Header extends Component {
    render() {
        const greeting = (
            <div id="profile">
                <span id="username">Hello, {this.props.username}!</span>|
                <Link
                    to="/logout"
                    onClick={<Logout userLoggedIn={this.props.userLoggedIn} />}
                >
                    logout
                </Link>
            </div>
        );

        return (
            <header>
                <Link to="/" className="link">
                    <span className="logo">&#9731;</span>
                    <span className="header">SeenIt</span>
                </Link>
                {this.props.username ? greeting : null}
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string,
    userLoggedIn: PropTypes.func
};
