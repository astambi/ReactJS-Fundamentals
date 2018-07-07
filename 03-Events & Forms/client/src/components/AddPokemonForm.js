import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddPokemonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: {
                name: "",
                url: "",
                info: ""
            },
            error: ""
        };
    }

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const pokemon = this.state.pokemon;
        pokemon[name] = value;

        this.setState({
            pokemon
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Validation
        if (
            !this.state.pokemon.name ||
            !this.state.pokemon.url ||
            !this.state.pokemon.info ||
            !this.state.pokemon.name.trim() ||
            !this.state.pokemon.url.trim() ||
            !this.state.pokemon.info.trim()
        ) {
            this.setState({ error: "Please provide pokemon details" });
            return;
        }

        // Clear error
        this.setState({
            error: ""
        });

        // Login
        fetch("http://localhost:5000/pokedex/create", {
            method: "POST",
            body: JSON.stringify(this.state.pokemon),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => data.json())
            .then(data => {
                // console.log(data);
                this.props.updatePokemons(data.pokemonColection);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="form-container">
                <h1>Create Pokemon</h1>
                <div className="error">{this.state.error}</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Pokemon Name</label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.name}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Pokemon Image URL</label>
                        <input
                            required
                            type="url"
                            id="url"
                            name="url"
                            value={this.state.url}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Pokemon Info</label>
                        <input
                            required
                            type="text"
                            id="info"
                            name="info"
                            value={this.state.info}
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Create Pokemon"
                    />
                </form>
            </div>
        );
    }
}

AddPokemonForm.propTypes = {
    updatePokemons: PropTypes.func
};
