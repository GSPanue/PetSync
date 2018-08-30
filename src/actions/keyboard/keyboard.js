import {
    KEYBOARD_OPENED,
    KEYBOARD_CLOSED
} from '../../constants/actionTypes';

export const keyboardOpened = () => {
    return {
        type: KEYBOARD_OPENED
    }
};

export const keyboardClosed = () => {
    return {
        type: KEYBOARD_CLOSED
    }
};
