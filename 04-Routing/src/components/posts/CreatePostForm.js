import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import requester from "../../infrastructure/requester";
import observer from "../../infrastructure/observer";
import "../../styles/submit.css";

export default class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            url: "",
            imageUrl: "",
            description: "",
            author: sessionStorage.getItem("username")
        };
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Validation
        if (
            !this.state.url ||
            !this.state.title ||
            this.state.url.length === 0 ||
            this.state.title.length === 0 ||
            !this.state.url.startsWith("http")
        ) {
            observer.trigger(observer.events.notification, {
                type: "error",
                message: "Please provide url & title"
            });
            return;
        }

        requester
            .post("appdata", "posts", "kinvey", this.state)
            .then(res => {
                // Notification
                observer.trigger(observer.events.notification, {
                    type: "info",
                    message: "Post created"
                });

                // Clear input fields
                this.setState({
                    title: "",
                    url: "",
                    imageUrl: "",
                    description: "",
                    author: ""
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
        if (!sessionStorage.getItem("authtoken")) {
            return <Redirect to="/" />;
        }

        return (
            <section id="viewPostCreate">
                <div className="submitArea">
                    <h1>Create Post</h1>
                    <p>
                        Please, fill out the form. A thumbnail image/description
                        is not required.
                    </p>
                    <form
                        id="createPostForm"
                        className="submitForm"
                        onSubmit={this.handleSubmit}
                    >
                        <label>Link URL:</label>
                        <input
                            required
                            name="url"
                            type="url"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                        <label>Link Title:</label>
                        <input
                            required
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        <label>Link Thumbnail Image (optional):</label>
                        <input
                            name="imageUrl"
                            type="text"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                        <label>Description (optional):</label>
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Create Post" />
                    </form>
                </div>
            </section>
        );
    }
}
