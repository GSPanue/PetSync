import {
    SHOW_OVERLAY,
    HIDE_OVERLAY
} from '../../constants/actionTypes';

export const showOverlay = () => {
    return {
        type: SHOW_OVERLAY
    }
};

export const hideOverlay = () => {
    return {
        type: HIDE_OVERLAY
    }
};
