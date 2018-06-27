import React from "react";
import "./App.css";

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">
                Time now:
                <span className="App-timer">
                    {new Date().toLocaleTimeString("en-GB")}
                </span>
            </h1>
        </header>
    </div>
);

export default App;
