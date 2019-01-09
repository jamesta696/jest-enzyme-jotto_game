import { actionTypes } from "../actions/settingsActions";
import successReducer from "./successReducer";

test("returns initialState of false when no aciton is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test("returns state of true when received action type of CORRECT_GUESS", () => {
    const newState = successReducer(undefined, {
        type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toBe(true);
});
