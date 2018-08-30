import {
    KEYBOARD_OPENED,
    KEYBOARD_CLOSED
} from '../../../constants/actionTypes';
import reducer from '../keyboard';

const {fromJS} = require('immutable');

describe('Reducer: Keyboard', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            opened: false
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle KEYBOARD_OPENED', () => {
        const initialState = fromJS({
            opened: false
        });

        const expectedState = fromJS({
            opened: true
        });

        expect(reducer(initialState, {
            type: KEYBOARD_OPENED
        })).toEqual(expectedState);
    });

    it('should handle KEYBOARD_CLOSED', () => {
        const initialState = fromJS({
            opened: true
        });

        const expectedState = fromJS({
            opened: false
        });

        expect(reducer(initialState, {
            type: KEYBOARD_CLOSED
        })).toEqual(expectedState);
    });
});
