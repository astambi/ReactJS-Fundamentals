import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/post.css";

export default class Post extends Component {
    createdTimeAgo = () => {
        let diff = new Date() - new Date(this.props.date);

        diff = Math.floor(diff / 60000);
        if (diff < 1) return "less than a minute";
        if (diff < 60) return diff + " minute" + this.pluralize(diff);

        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + " hour" + this.pluralize(diff);

        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + " day" + this.pluralize(diff);

        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + " month" + this.pluralize(diff);

        diff = Math.floor(diff / 12);
        return diff + " year" + this.pluralize(diff);
    };

    pluralize = value => (value !== 1 ? "s" : "");

    render() {
        return (
            <article className="post">
                <div className="col rank">
                    <span>{this.props.rank}</span>
                </div>
                <div className="col thumbnail">
                    <Link to={this.props.url}>
                        <img src={this.props.imageUrl} alt={this.props.title} />
                    </Link>
                </div>
                <div className="post-content">
                    <div className="title">
                        <Link to={this.props.url}>{this.props.title}</Link>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.createdTimeAgo()} ago by{" "}
                            {this.props.author}
                        </div>
                        <div className="controls">
                            <ul>
                                <li className="action">
                                    <Link
                                        to={`/posts/details/${this.props._id}`}
                                    >
                                        Details
                                    </Link>
                                </li>
                                <li className="action">
                                    <Link
                                        to={`/posts/edit/${this.props._id}`}
                                        className="editPost"
                                    >
                                        Edit
                                    </Link>
                                </li>
                                <li className="action">
                                    <Link
                                        to={`/posts/delete/${this.props._id}`}
                                        className="deletePost"
                                    >
                                        Delete
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

Post.propTypes = {
    _id: PropTypes.string,
    rank: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string
};
