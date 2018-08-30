import * as actions from '../keyboard';
import {
    KEYBOARD_OPENED,
    KEYBOARD_CLOSED
} from '../../../constants/actionTypes';

describe('Actions: Keyboard', () => {
    it('should create an action to indicate that the keyboard has opened', () => {
        const expectedAction = {
            type: KEYBOARD_OPENED
        };

        expect(actions.keyboardOpened()).toEqual(expectedAction);
    });

    it('should create an action to indicate that the keyboard has closed', () => {
        const expectedAction = {
            type: KEYBOARD_CLOSED
        };

        expect(actions.keyboardClosed()).toEqual(expectedAction);
    });
});
