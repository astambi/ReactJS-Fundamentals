import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BoundForm extends Component {
    constructor(props) {
        super(props);
        this.state = initializeState(props.children);
    }

    onChange = event => {
        const target = event.target;
        this.setState({
            [target.name]:
                target.type === "checkbox" ? target.checked : target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(Object.assign({}, this.state));
    };

    render() {
        // console.log(this.props.children);
        return (
            <form onSubmit={this.onSubmit}>
                {React.Children.map(this.props.children, child => {
                    if (IsInput(child)) {
                        return React.cloneElement(child, {
                            onChange: this.onChange,
                            value: this.state[child.props.name]
                        });
                    }

                    return child;
                })}
            </form>
        );
    }
}

const initializeState = children => {
    const inputs = {};
    React.Children.forEach(children, child => {
        if (IsInput(child)) {
            inputs[child.props.name] = "";
        }
    });

    return inputs;
};

const IsInput = child =>
    (child.type === "input" || child.type === "textarea") && child.props.name;

BoundForm.propTypes = {
    onSubmit: PropTypes.func
};
