import React, { Component } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

export default class App extends Component {
    state = {
        number: 0
    };
    render() {
        return (
            <div className="App">
                <h1>ROOT</h1>
                <AddNumberRoot></AddNumberRoot>
                <DisplayNumberRoot></DisplayNumberRoot>
            </div>
        );
    }
}
