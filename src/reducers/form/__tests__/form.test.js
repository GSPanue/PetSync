import {
    CHANGE_SELECTED_TEXT_FIELD,
    CHANGE_TEXT_FIELD_INPUT,
    CLEAR_TEXT_FIELD_INPUT
} from '../../../constants/actionTypes';
import reducer from '../form';

const {fromJS} = require('immutable');

describe('Reducer: Form', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            signIn: {
                emailAddress: {
                    value: ''
                },
                selected: null
            }
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle CHANGE_SELECTED_TEXT_FIELD', () => {
        const initialState = fromJS({
            signIn: {
                emailAddress: {
                    value: ''
                },
                selected: null
            }
        });

        const expectedState = fromJS({
            signIn: {
                emailAddress: {
                    value: ''
                },
                selected: 'emailAddress'
            }
        });

        expect(reducer(initialState, {
            type: CHANGE_SELECTED_TEXT_FIELD,
            payload: {
                form: 'signIn',
                id: 'emailAddress'
            }
        })).toEqual(expectedState);
    });

    it('should handle CHANGE_TEXT_FIELD_INPUT', () => {
        const initialState = fromJS({
            signIn: {
                emailAddress: {
                    value: ''
                },
                selected: null
            }
        });

        const expectedState = fromJS({
            signIn: {
                emailAddress: {
                    value: 'value'
                },
                selected: null
            }
        });

        expect(reducer(initialState, {
            type: CHANGE_TEXT_FIELD_INPUT,
            payload: {
                form: 'signIn',
                id: 'emailAddress',
                value: 'value'
            }
        })).toEqual(expectedState);
    });

    it('should handle CLEAR_TEXT_FIELD_INPUT', () => {
        const initialState = fromJS({
            signIn: {
                emailAddress: {
                    value: 'value'
                },
                selected: null
            }
        });

        const expectedState = fromJS({
            signIn: {
                emailAddress: {
                    value: ''
                },
                selected: null
            }
        });

        expect(reducer(initialState, {
            type: CLEAR_TEXT_FIELD_INPUT,
            payload: {
                form: 'signIn',
                id: 'emailAddress'
            }
        })).toEqual(expectedState);
    });
});
