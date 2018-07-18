import React, { Component } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../helpers/ErrorBoundary";
import ItemsList from "./errorNotification/ItemsList";

export default class HomePage extends Component {
    render() {
        return (
            <section>
                With Warning
                <Link to="/normalStyle">Normal Style Page</Link>
                <Link to="/warningStyle">Warning Style Page</Link>
                Managed Form
                <Link to="/managedForm">Managed Form</Link>
                Simulating Error Notification (error is thrown on adding Item
                #3)
                <ErrorBoundary>
                    <ItemsList />
                </ErrorBoundary>
            </section>
        );
    }
}
