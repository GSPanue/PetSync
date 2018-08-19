import {
    CHANGE_SCREEN,
    CHANGE_SCREEN_COMPLETE
} from '../../../constants/actionTypes';
import reducer from '../screen';

const {fromJS} = require('immutable');

describe('Reducer: Screen', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            currentScreen: 'Splash',
            nextScreen: null
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle CHANGE_SCREEN', () => {
        const initialState = fromJS({
            currentScreen: 'Splash',
            nextScreen: null
        });

        const expectedState = fromJS({
            currentScreen: 'Splash',
            nextScreen: 'SignIn'
        });

        expect(reducer(initialState, {
            type: CHANGE_SCREEN,
            payload: {
                screen: 'SignIn'
            }
        })).toEqual(expectedState);
    });

    it('should handle CHANGE_SCREEN_COMPLETE', () => {
        const initialState = fromJS({
            currentScreen: 'Splash',
            nextScreen: 'SignIn'
        });

        const expectedState = fromJS({
            currentScreen: 'SignIn',
            nextScreen: null
        });

        expect(reducer(initialState, {
            type: CHANGE_SCREEN_COMPLETE
        })).toEqual(expectedState);
    });
});
