import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PostsList from "./PostsList";

export default class Catalog extends Component {
    render() {
        if (!sessionStorage.getItem("authtoken")) {
            return <Redirect to="/" />;
        }

        return (
            <section id="viewCatalog">
                <PostsList />
            </section>
        );
    }
}
