import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

let counter = 0;

const incrementCounter = () => {
    counter++;
    ReactDOM.render(App(), document.getElementById("root"));
};

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Counter: {counter}</h1>
            <button className="App-button" onClick={incrementCounter}>
                Increment counter
            </button>
        </header>
    </div>
);

export default App;
