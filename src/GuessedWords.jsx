import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span className="alert alert-info" data-test="guessed-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordRows = props.guessedWords;
        contents = (
            <div className="mt-4" data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-dark table-sm">
                    <thead>
                        <tr>
                            <th>Guessed Words</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordRows.map(word => {
                            return (
                                <tr
                                    key={word.guessedWord}
                                    data-test="guessed-word"
                                >
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
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
