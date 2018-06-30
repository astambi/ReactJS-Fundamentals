import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SliderButton extends Component {
    render = () => (
        <img
            className="Slider-button"
            src={this.props.src}
            alt={this.props.alt}
            onClick={() => this.props.select(this.props.id)}
        />
    );
}

SliderButton.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    select: PropTypes.func.isRequired
};
