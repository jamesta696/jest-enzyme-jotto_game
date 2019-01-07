import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span class="alert alert-info" data-test="guessed-instructions">
                Try to guess the secret word!
            </span>
        );
    }
    return <div data-test="guessed-words-component">{contents}</div>;
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
