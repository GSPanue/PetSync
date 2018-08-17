import {
    CHANGE_SELECTED_TEXT_FIELD,
    CHANGE_TEXT_FIELD_INPUT,
    CLEAR_TEXT_FIELD_INPUT
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    signIn: {
        emailAddress: {
            value: ''
        },
        selected: null
    }
});

const form = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_TEXT_FIELD:
            return state
                .setIn([action.payload.form, 'selected'], action.payload.id);

        case CHANGE_TEXT_FIELD_INPUT:
            return state
                .setIn([action.payload.form, action.payload.id, 'value'], action.payload.value);

        case CLEAR_TEXT_FIELD_INPUT:
            return state
                .setIn([action.payload.form, action.payload.id, 'value'], '');

        default:
            return state;
    }
};

export default form;
