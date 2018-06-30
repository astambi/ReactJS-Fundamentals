import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Details extends Component {
    render() {
        if (!this.props.url) {
            return null;
        }

        return (
            <section id="bio">
                <img src={this.props.url} alt="character" />
                <div className="Details-info">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.bio}</p>
                </div>
            </section>
        );
    }
}

Details.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string
};
