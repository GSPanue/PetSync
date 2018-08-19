import {
    CHANGE_SCREEN,
    CHANGE_SCREEN_COMPLETE
} from '../../constants/actionTypes';

export const changeScreen = (screen) => {
    return {
        type: CHANGE_SCREEN,
        payload: {
            screen
        }
    }
};

export const changeScreenComplete = () => {
    return {
        type: CHANGE_SCREEN_COMPLETE
    }
};
