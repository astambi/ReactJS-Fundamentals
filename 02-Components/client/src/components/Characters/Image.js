import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Image extends Component {
    render = () => (
        <img
            className="Character-image"
            alt="character"
            src={this.props.url}
            onClick={() => this.props.select(this.props.id)}
        />
    );
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired
};
