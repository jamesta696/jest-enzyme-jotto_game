import React, { Component } from "react";
//import { connect } from "react-redux";
import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="mb-4 display-3">Jotto</h3>
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: "train", letterMatchCount: 3 }
                    ]}
                />
            </div>
        );
    }
}

export default App;
