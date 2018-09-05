import {
    SHOW_OVERLAY,
    HIDE_OVERLAY
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    show: false
});

const overlay = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_OVERLAY:
            return state
                .set('show', true);

        case HIDE_OVERLAY:
            return state
                .set('show', false);

        default:
            return state;
    }
};

export default overlay;
