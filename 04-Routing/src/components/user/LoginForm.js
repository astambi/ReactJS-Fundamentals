import React, { Component } from "react";
import requester from "../../infrastructure/requester";
import observer from "../../infrastructure/observer";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "",
                password: ""
            }
        };
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const user = this.state.user;
        user[name] = value;

        this.setState({ user });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Validation
        if (!this.state.user.username || !this.state.user.password) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message: "Please provide username & password"
            });
            return;
        }

        requester
            .post("user", "login", "basic", this.state.user)
            .then(res => {
                // Login
                observer.trigger(observer.events.loginUser, res.username);
                sessionStorage.setItem("authtoken", res._kmd.authtoken);
                sessionStorage.setItem("username", res.username);

                // Notification
                observer.trigger(observer.events.notification, {
                    type: "info",
                    message: "Login successful"
                });

                // Clear input fields
                const user = { username: "", password: "" };
                this.setState({
                    error: "",
                    user
                });

                // Redirect to Catalog
                this.props.history.push("/posts/catalog");
            })
            .catch(err =>
                observer.trigger(observer.events.notification, {
                    type: "error",
                    message: err.responseJSON.description
                })
            );
    };

    render() {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input
                    required
                    name="username"
                    type="text"
                    value={this.state.user.username}
                    onChange={this.handleChange}
                />
                <label>Password:</label>
                <input
                    required
                    name="password"
                    type="password"
                    value={this.state.user.password}
                    onChange={this.handleChange}
                />
                <input id="btnLogin" type="submit" value="Sign In" />
            </form>
        );
    }
}
