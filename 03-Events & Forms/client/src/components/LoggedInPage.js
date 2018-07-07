import React, { Component } from "react";
import AddPokemonForm from "./AddPokemonForm";
import Pokemon from "./Pokemon";

export default class LoggedInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            error: ""
        };
    }

    updatePokemons = pokemons => {
        this.setState({
            pokemons
        });
    };

    componentDidMount = () => {
        fetch("http://localhost:5000/pokedex/pokedex")
            .then(rawData => rawData.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    pokemons: data.pokemonColection
                });
                // console.log(this.state.pokemons);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <AddPokemonForm updatePokemons={this.updatePokemons} />
                <div className="pokemons">
                    {this.state.pokemons.map(pokemon => (
                        <Pokemon key={pokemon.name} item={pokemon} />
                    ))}
                </div>
            </div>
        );
    }
}
