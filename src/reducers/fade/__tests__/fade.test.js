import {
    ADD_ANIMATION,
    REMOVE_ANIMATION,
    CHANGE_ANIMATION,
    COMPLETE_ANIMATION
} from '../../../constants/actionTypes';
import reducer from '../fade';

const {fromJS} = require('immutable');

describe('Reducer: Fade', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            'splash': {
                value: null,
                type: null,
                complete: false
            }
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle ADD_ANIMATION', () => {
        const expectedState = fromJS({
            'splash': {
                value: 'value',
                type: 'type',
                complete: false
            }
        });

        expect(reducer(undefined, {
            type: ADD_ANIMATION,
            payload: {
                id: 'splash',
                value: 'value',
                type: 'type'
            }
        })).toEqual(expectedState);
    });

    it('should handle REMOVE_ANIMATION', () => {
        const initialState = fromJS({
            'splash': {
                value: 'value',
                type: 'type',
                complete: true
            }
        });

        const expectedState = fromJS({
            'splash': {
                value: null,
                type: null,
                complete: false
            }
        });

        expect(reducer(initialState, {
            type: REMOVE_ANIMATION,
            payload: {
                id: 'splash'
            }
        })).toEqual(expectedState);
    });

    it('should handle CHANGE_ANIMATION', () => {
        const initialState = fromJS({
            'splash': {
                value: 'value',
                type: 'type',
                complete: true
            }
        });

        const expectedState = fromJS({
            'splash': {
                value: 'value',
                type: 'new type',
                complete: false
            }
        });

        expect(reducer(initialState, {
            type: CHANGE_ANIMATION,
            payload: {
                id: 'splash',
                type: 'new type'
            }
        })).toEqual(expectedState);
    });

    it('should handle COMPLETE_ANIMATION', () => {
        const initialState = fromJS({
            'splash': {
                value: 'value',
                type: 'type',
                complete: false
            }
        });

        const expectedState = fromJS({
            'splash': {
                value: 'value',
                type: 'type',
                complete: true
            }
        });

        expect(reducer(initialState, {
            type: COMPLETE_ANIMATION,
            payload: {
                id: 'splash'
            }
        })).toEqual(expectedState);
    });
});
