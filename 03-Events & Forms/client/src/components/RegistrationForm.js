import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                confirmEmail: "",
                name: "",
                password: "",
                confirmPassword: "",
                isChecked: false
            },
            error: ""
        };
    }

    handleChange = event => {
        const target = event.target;
        // console.log(target.checked);

        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        const user = this.state.user;
        user[name] = value;

        this.setState({
            user
        });
        // console.log(user);
    };

    handleSubmit = event => {
        event.preventDefault();

        // Validation
        if (
            !this.state.user.email ||
            !this.state.user.confirmEmail ||
            !this.state.user.name ||
            !this.state.user.password ||
            !this.state.user.confirmPassword
        ) {
            this.setState({
                error: "Please provide all registration details"
            });
            return;
        }
        if (!this.state.user.isChecked) {
            this.setState({
                error: "Please accept our terms to process your details"
            });
            return;
        }
        if (this.state.user.email !== this.state.user.confirmEmail) {
            this.setState({
                error: "Emails do not match"
            });
            return;
        }
        if (this.state.user.password !== this.state.user.confirmPassword) {
            this.setState({
                error: "Passwords do not match"
            });
            return;
        }
        if (this.state.user.password.length < 8) {
            this.setState({ error: "Password must be at least 8 symbols" });
            return;
        }

        // Clear error
        this.setState({
            error: ""
        });

        // Save user to db
        fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            body: JSON.stringify(this.state.user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(res => {
                console.log(res);

                // User exists
                if (!res.success) {
                    this.setState({
                        error: res.message
                    });
                    return;
                }

                // User saved
                this.props.updateRoute("login");
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="form-container">
                <h1>Sign Up</h1>
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
                        <label htmlFor="confirmEmail">Confirm Email</label>
                        <input
                            required
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={this.state.confirmEmail}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">User Name</label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
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
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            required
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input
                            required
                            type="checkbox"
                            id="checkbox"
                            name="isChecked"
                            checked={this.state.isChecked}
                            className="form-check-input"
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="checkbox">
                            I agree with the terms
                        </label>
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Register"
                    />
                </form>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    updateRoute: PropTypes.func
};
