import React, { Component } from "react";

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            items: []
        };
    }

    handleClick = () => {
        this.setState(prevState => {
            const counter = prevState.counter + 1;
            let items = prevState.items;

            const newItem = {
                id: counter,
                name: "Item #" + counter
            };
            items.push(newItem);

            return {
                counter,
                items
            };
        });
    };

    render() {
        // Simulate Error
        if (this.state.counter === 3) {
            throw new Error("Error Simulated");
        }

        return (
            <div className="container">
                <button onClick={this.handleClick}>Click to Add Item</button>
                <ul className="container">
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
