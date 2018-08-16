import {
    CHANGE_SELECTED_TEXT_FIELD,
    UPDATE_INPUT,
    CLEAR_INPUT
} from '../../../constants/actionTypes';
import reducer from '../textField';

const {fromJS} = require('immutable');

describe('Reducer: TextField', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            signInEmailAddress: {
                value: ''
            },
            selected: null
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle CHANGE_SELECTED_TEXT_FIELD', () => {
        const initialState = fromJS({
            signInEmailAddress: {
                value: ''
            },
            selected: null
        });

        const expectedState = fromJS({
            signInEmailAddress: {
                value: ''
            },
            selected: 'signInEmailAddress'
        });

        expect(reducer(initialState, {
            type: CHANGE_SELECTED_TEXT_FIELD,
            payload: {
                id: 'signInEmailAddress'
            }
        })).toEqual(expectedState);
    });

    it('should handle UPDATE_INPUT', () => {
        const initialState = fromJS({
            signInEmailAddress: {
                value: ''
            },
            selected: null
        });

        const expectedState = fromJS({
            signInEmailAddress: {
                value: 'value'
            },
            selected: null
        });

        expect(reducer(initialState, {
            type: UPDATE_INPUT,
            payload: {
                id: 'signInEmailAddress',
                value: 'value'
            }
        })).toEqual(expectedState);
    });

    it('should handle CLEAR_INPUT', () => {
        const initialState = fromJS({
            signInEmailAddress: {
                value: 'value'
            },
            selected: null
        });

        const expectedState = fromJS({
            signInEmailAddress: {
                value: ''
            },
            selected: null
        });

        expect(reducer(initialState, {
            type: CLEAR_INPUT,
            payload: {
                id: 'signInEmailAddress'
            }
        })).toEqual(expectedState);
    });
});
