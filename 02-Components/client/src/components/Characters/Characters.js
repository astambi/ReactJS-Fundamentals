import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "./Image";

export default class Characters extends Component {
    render() {
        const images = this.props.images.map(image => (
            <Image
                key={image.id}
                url={image.url}
                select={this.props.select}
                id={image.id}
            />
        ));

        return <section id="characters">{images}</section>;
    }
}

Characters.propTypes = {
    images: PropTypes.array,
    select: PropTypes.func
};
