import React, { Component } from "react";
import Article from "./Article";
import Register from "./Register";
import Nav from "./Nav";

export default class WarningStylePage extends Component {
    render() {
        return (
            <section>
                <Article />
                <Register />
                <Nav />
            </section>
        );
    }
}
