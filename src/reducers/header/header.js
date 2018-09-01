import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    show: true
});

const header = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HEADER:
            return state
                .set('show', true);

        case HIDE_HEADER:
            return state
                .set('show', false);

        default:
            return state;
    }
};

export default header;
