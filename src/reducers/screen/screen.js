import {
    CHANGE_SCREEN,
    CHANGE_SCREEN_COMPLETE
} from '../../constants/actionTypes';

const {fromJS} = require('immutable');

const initialState = fromJS({
    currentScreen: 'Splash',
    nextScreen: null
});

const screen = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return state
                .set('nextScreen', action.payload.screen);

        case CHANGE_SCREEN_COMPLETE:
            return state
                .set('currentScreen', state.get('nextScreen'))
                .set('nextScreen', null);

        default:
            return state;
    }
};

export default screen;
