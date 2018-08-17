import {
    CHANGE_SELECTED_TEXT_FIELD,
    CHANGE_TEXT_FIELD_INPUT,
    CLEAR_TEXT_FIELD_INPUT
} from '../../constants/actionTypes';

export const changeSelectedTextField = (form, id) => {
    return {
        type: CHANGE_SELECTED_TEXT_FIELD,
        payload: {
            form,
            id
        }
    }
};

export const changeTextFieldInput = (form, id, value) => {
    return {
        type: CHANGE_TEXT_FIELD_INPUT,
        payload: {
            form,
            id,
            value
        }
    }
};

export const clearTextFieldInput = (form, id) => {
    return {
        type: CLEAR_TEXT_FIELD_INPUT,
        payload: {
            form,
            id
        }
    }
};
