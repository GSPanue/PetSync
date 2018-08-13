import {
    ADD_ANIMATION,
    REMOVE_ANIMATION,
    CHANGE_ANIMATION,
    COMPLETE_ANIMATION
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    'splash': {
        value: null,
        type: null,
        complete: false
    }
});

const fade = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANIMATION:
            return state
                .setIn([action.payload.id, 'value'], action.payload.value)
                .setIn([action.payload.id, 'type'], action.payload.type)
                .setIn([action.payload.id, 'complete'], false);

        case REMOVE_ANIMATION:
            return state
                .setIn([action.payload.id, 'value'], null)
                .setIn([action.payload.id, 'type'], null)
                .setIn([action.payload.id, 'complete'], false);

        case CHANGE_ANIMATION:
            return state
                .setIn([action.payload.id, 'type'], action.payload.type)
                .setIn([action.payload.id, 'complete'], false);

        case COMPLETE_ANIMATION:
            return state
                .setIn([action.payload.id, 'complete'], true);

        default:
            return state;
    }
};

export default fade;
