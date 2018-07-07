import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            },
            error: ""
        };
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const user = this.state.user;
        user[name] = value;

        this.setState({
            user
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Validation
        if (!this.state.user.email || !this.state.user.password) {
            this.setState({
                error: "Please provide login credentials"
            });
            return;
        }

        // Clear error
        this.setState({
            error: ""
        });

        // Login
        fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify(this.state.user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(res => {
                console.log(res);

                if (!res.success || !res.token) {
                    this.setState({ error: res.message });
                    return;
                }

                // Save token
                localStorage.setItem("token", res.token);
                console.log(localStorage.getItem("token"));

                // Update route
                this.props.updateRoute("loggedIn");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="form-container">
                <h1>Login</h1>
                <div className="error">{this.state.error}</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Login"
                    />
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    updateRoute: PropTypes.func
};
