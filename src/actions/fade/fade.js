import {
    ADD_FADE_ANIMATION,
    REMOVE_FADE_ANIMATION,
    CHANGE_FADE_ANIMATION,
    COMPLETE_FADE_ANIMATION
} from '../../constants/actionTypes';

export const addFadeAnimation = (id, value, type) => {
    return {
        type: ADD_FADE_ANIMATION,
        payload: {
            id,
            value,
            type
        }
    }
};

export const removeFadeAnimation = (id) => {
    return {
        type: REMOVE_FADE_ANIMATION,
        payload: {
            id
        }
    }
};

export const changeFadeAnimation = (id, type) => {
    return {
        type: CHANGE_FADE_ANIMATION,
        payload: {
            id,
            type
        }
    }
};

export const completeFadeAnimation = (id) => {
    return {
        type: COMPLETE_FADE_ANIMATION,
        payload: {
            id
        }
    }
};
