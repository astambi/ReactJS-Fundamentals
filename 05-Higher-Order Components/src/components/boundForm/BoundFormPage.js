import React, { Component } from "react";
import BoundForm from "./BoundForm";

export default class BoundFormPage extends Component {
    onSubmit = data => {
        console.log(data);
    };

    render() {
        return (
            <section>
                Check the output on the console :) <br />
                Login Form
                <BoundForm onSubmit={this.onSubmit}>
                    Username: <input name="username" />
                    Password: <input name="password" type="password" />
                    <input type="submit" value="Login" />
                </BoundForm>
                Create Book Form
                <BoundForm onSubmit={this.onSubmit}>
                    Title: <input name="title" />
                    Author: <input name="author" />
                    Description: <textarea name="description" />
                    Price: <input name="price" type="number" min="0" />
                    Is Available: <input name="isAvailable" type="checkbox" />
                    <input type="submit" value="Submit" />
                </BoundForm>
            </section>
        );
    }
}
