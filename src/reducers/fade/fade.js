import {
    ADD_FADE_ANIMATION,
    REMOVE_FADE_ANIMATION,
    CHANGE_FADE_ANIMATION,
    COMPLETE_FADE_ANIMATION
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    splash: {
        value: null,
        type: null,
        complete: false
    },
    signIn: {
        value: null,
        type: null,
        complete: false
    }
});

const fade = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FADE_ANIMATION:
            return state
                .setIn([action.payload.id, 'value'], action.payload.value)
                .setIn([action.payload.id, 'type'], action.payload.type)
                .setIn([action.payload.id, 'complete'], false);

        case REMOVE_FADE_ANIMATION:
            return state
                .setIn([action.payload.id, 'value'], null)
                .setIn([action.payload.id, 'type'], null)
                .setIn([action.payload.id, 'complete'], false);

        case CHANGE_FADE_ANIMATION:
            return state
                .setIn([action.payload.id, 'type'], action.payload.type)
                .setIn([action.payload.id, 'complete'], false);

        case COMPLETE_FADE_ANIMATION:
            return state
                .setIn([action.payload.id, 'complete'], true);

        default:
            return state;
    }
};

export default fade;
