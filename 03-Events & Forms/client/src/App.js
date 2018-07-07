import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LoggedInPage from "./components/LoggedInPage";

const login = "login";
const loggedIn = "loggedIn";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: ""
        };
    }

    switchForms = () => {
        if (this.state.route === login) {
            this.setState({ route: "" });
        } else {
            this.setState({ route: login });
        }
    };

    renderComponent = () => {
        if (this.state.route === loggedIn) {
            return <LoggedInPage />;
        }

        if (this.state.route === login) {
            return <LoginForm updateRoute={this.updateRoute} />;
        }

        return <RegistrationForm updateRoute={this.updateRoute} />;
    };

    updateRoute = route => {
        this.setState({
            route
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.switchForms} className="btn btn-link">
                    Login / Register
                </button>
                {this.renderComponent()}
            </div>
        );
    }
}

export default App;
