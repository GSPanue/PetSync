import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../../constants/actionTypes';

export const showHeader = () => {
    return {
        type: SHOW_HEADER
    }
};

export const hideHeader = () => {
    return {
        type: HIDE_HEADER
    }
};
