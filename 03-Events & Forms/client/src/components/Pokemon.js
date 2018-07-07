import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Pokemon extends Component {
    render() {
        const { name, url, info } = this.props.item;
        return (
            <div className="pokemon">
                <h1>{name}</h1>
                <h3>{info}</h3>
                <div>
                    <img src={url} alt={name} />
                </div>
            </div>
        );
    }
}

Pokemon.propTypes = {
    item: PropTypes.object
};
