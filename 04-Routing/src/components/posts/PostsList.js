import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Post from "./Post";
import requester from "../../infrastructure/requester";
import observer from "../../infrastructure/observer";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    getPosts = () => {
        requester
            .get("appdata", "posts", "kinvey")
            .then(posts => this.setState({ posts }))
            .catch(err => {
                observer.trigger(observer.events.notification, {
                    type: "error",
                    message: err.responseJSON.description
                });

                // TODO
                <Redirect to="/" />;
            });
    };

    componentDidMount = () => this.getPosts();

    render() {
        const postsContent =
            this.state.posts.length === 0
                ? "No posts in database"
                : this.state.posts.map((post, index) => (
                      <Post
                          key={post._id}
                          date={post._kmd.ect}
                          rank={index}
                          {...post}
                      />
                  ));

        return (
            <div id="allForumPosts" className="posts">
                {postsContent}
            </div>
        );
    }
}
