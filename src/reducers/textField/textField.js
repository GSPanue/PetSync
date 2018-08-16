import {
    CHANGE_SELECTED_TEXT_FIELD,
    UPDATE_INPUT,
    CLEAR_INPUT
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    signInEmailAddress: {
        value: ''
    },
    selected: null
});

const textField = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_TEXT_FIELD:
            return state
                .set('selected', action.payload.id);

        case UPDATE_INPUT:
            return state
                .setIn([action.payload.id, 'value'], action.payload.value);

        case CLEAR_INPUT:
            return state
                .setIn([action.payload.id, 'value'], '');

        default:
            return state;
    }
};

export default textField;
