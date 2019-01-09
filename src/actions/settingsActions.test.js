import { correctGuess, actionTypes } from "./settingsActions";

describe("correctGuess", () => {
    test("returns action with type 'CORRECT_GUESS' ", () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});
