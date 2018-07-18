import React, { Component } from "react";
import requester from "../../infrastructure/requester";
import observer from "../../infrastructure/observer";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "",
                password: "",
                repeatPass: ""
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
        if (
            !this.state.user.username ||
            !this.state.user.password ||
            !this.state.user.repeatPass
        ) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message: "Please provide username & password"
            });
            return;
        }
        if (!/^[A-Za-z]{3,}$/g.test(this.state.user.username.trim())) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message:
                    "Username should be at least 3 characters long & contain english alphabet letters"
            });
            return;
        }
        if (!/^[A-Za-z\d]{6,}$/.test(this.state.user.password.trim())) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message:
                    "Password should be at least 6 characters long & contain alphanumerical characters"
            });
            return;
        }
        if (this.state.user.password !== this.state.user.repeatPass) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message: "Passwords do not match"
            });
            return;
        }

        const data = {
            username: this.state.user.username,
            password: this.state.user.password
        };

        requester
            .post("user", "", "basic", data)
            .then(res => {
                // Register
                observer.trigger(observer.events.loginUser, res.username);
                sessionStorage.setItem("authtoken", res._kmd.authtoken);
                sessionStorage.setItem("username", res.username);

                // Notification
                observer.trigger(observer.events.notification, {
                    type: "info",
                    message: "User registration successful"
                });

                // Clear input fields
                const user = { username: "", password: "", repeatPass: "" };
                this.setState({ user });

                // Redirect to Catalog
                this.props.history.push("/posts/catalog");
            })
            .catch(err => {
                observer.trigger(observer.events.notification, {
                    type: "error",
                    message: err.responseJSON.description
                });
            });
    };

    render() {
        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
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
                <label>Repeat Password:</label>
                <input
                    required
                    name="repeatPass"
                    type="password"
                    value={this.state.user.repeatPass}
                    onChange={this.handleChange}
                />
                <input id="btnRegister" type="submit" value="Sign Up" />
            </form>
        );
    }
}
