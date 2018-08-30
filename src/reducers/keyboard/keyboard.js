import {
    KEYBOARD_OPENED,
    KEYBOARD_CLOSED
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    opened: false
});

const keyboard = (state = initialState, action) => {
    switch (action.type) {
        case KEYBOARD_OPENED:
            return state
                .set('opened', true);

        case KEYBOARD_CLOSED:
            return state
                .set('opened', false);

        default:
            return state;
    }
};

export default keyboard;
