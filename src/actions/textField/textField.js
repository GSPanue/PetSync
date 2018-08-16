import {
    CHANGE_SELECTED_TEXT_FIELD,
    UPDATE_INPUT,
    CLEAR_INPUT
} from '../../constants/actionTypes';

export const changeSelectedTextField = (id) => {
    return {
        type: CHANGE_SELECTED_TEXT_FIELD,
        payload: {
            id
        }
    }
};

export const updateInput = (id, value) => {
    return {
        type: UPDATE_INPUT,
        payload: {
            id,
            value
        }
    }
};

export const clearInput = (id) => {
    return {
        type: CLEAR_INPUT,
        payload: {
            id
        }
    }
};
