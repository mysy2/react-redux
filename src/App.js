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
                <AddNumberRoot
                    onClick={function (size) {
                        this.setState({ number: this.state.number + size });
                    }.bind(this)}
                ></AddNumberRoot>
                <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
            </div>
        );
    }
}
