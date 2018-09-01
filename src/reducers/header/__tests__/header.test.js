import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../../../constants/actionTypes';
import reducer from '../header';

const {fromJS} = require('immutable');

describe('Reducer: Header', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            show: true
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle SHOW_HEADER', () => {
        const initialState = fromJS({
            show: false
        });

        const expectedState = fromJS({
            show: true
        });

        expect(reducer(initialState, {
            type: SHOW_HEADER
        })).toEqual(expectedState);
    });

    it('should handle HIDE_HEADER', () => {
        const initialState = fromJS({
            show: true
        });

        const expectedState = fromJS({
            show: false
        });

        expect(reducer(initialState, {
            type: HIDE_HEADER
        })).toEqual(expectedState);
    });
});
