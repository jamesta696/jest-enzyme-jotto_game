import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../testing/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
    guessedWords: [
        {
            guessedWord: "train",
            letterMatchCount: 3
        }
    ]
};

/**
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

//----------------------Tests----------------------//

test("does not throw warnning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("if there are NO words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("GuessedWords component renders without error", () => {
        const component = findByTestAttr(wrapper, "guessed-words-component");
        expect(component.length).toBe(1);
    });

    test("component renders instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guessed-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("if there are words guessed", () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 }
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    test("GuessedWords component renders without error", () => {
        const component = findByTestAttr(wrapper, "guessed-words-component");
        expect(component.length).toBe(1);
    });

    test("renders 'guessed words' section", () => {
        const guessedWordsElement = findByTestAttr(wrapper, "guessed-words");
        expect(guessedWordsElement.length).toBe(1);
    });

    test("displays the corrent number of guessed words", () => {
        const guessWordsElements = findByTestAttr(wrapper, "guessed-word");
        expect(guessWordsElements.length).toBe(guessedWords.length);
    });
});
