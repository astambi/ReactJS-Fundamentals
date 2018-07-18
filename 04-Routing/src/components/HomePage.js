import React, { Component } from "react";
import LoginForm from "./user/LoginForm";
import RegisterForm from "./user/RegisterForm";
import About from "./About";

export default class HomePage extends Component {
    render() {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div className="signup">
                        <div>
                            <LoginForm {...this.props} />
                            <RegisterForm {...this.props} />
                        </div>
                    </div>
                    <About />
                </div>
            </section>
        );
    }
}
