import React, { Component } from "react";
import "./App.css";
import Slider from "./components/Slider/Slider";
import CharactersContainer from "./components/Characters/CharactersContainer";

class App extends Component {
    render() {
        return (
            <div className="App-container">
                <Slider />
                <CharactersContainer />
            </div>
        );
    }
}

export default App;
