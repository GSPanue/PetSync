import {
    ADD_ANIMATION,
    REMOVE_ANIMATION,
    CHANGE_ANIMATION,
    COMPLETE_ANIMATION
} from '../../constants/actionTypes';

export const addAnimation = (id, value, type) => {
    return {
        type: ADD_ANIMATION,
        payload: {
            id,
            value,
            type
        }
    }
};

export const removeAnimation = (id) => {
    return {
        type: REMOVE_ANIMATION,
        payload: {
            id
        }
    }
};

export const changeAnimation = (id, type) => {
    return {
        type: CHANGE_ANIMATION,
        payload: {
            id,
            type
        }
    }
};

export const completeAnimation = (id) => {
    return {
        type: COMPLETE_ANIMATION,
        payload: {
            id
        }
    }
};
