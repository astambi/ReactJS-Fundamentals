import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import requester from "../../infrastructure/requester";
import observer from "../../infrastructure/observer";

export default class Logout extends Component {
    logout = () => {
        console.log(this.props);

        requester.post("user", "_logout", "kinvey").then(res => {
            // Logout
            sessionStorage.removeItem("authtoken");
            sessionStorage.removeItem("username");
            this.props.userLoggedIn("");

            // Notification
            observer.trigger(observer.events.notification, {
                type: "info",
                message: "Logout successful"
            });
        });
    };

    render() {
        this.logout();
        return <Redirect to="/" />;
    }
}

Logout.propTypes = {
    userLoggedIn: PropTypes.func
};
