import {
    SHOW_OVERLAY,
    HIDE_OVERLAY
} from '../../../constants/actionTypes';
import reducer from '../overlay';

const {fromJS} = require('immutable');

describe('Reducer: Overlay', () => {
    it('should return the initial state', () => {
        const expectedState = fromJS({
            show: false
        });

        expect(reducer(undefined, {})).toEqual(expectedState);
    });

    it('should handle SHOW_OVERLAY', () => {
        const initialState = fromJS({
            show: false
        });

        const expectedState = fromJS({
            show: true
        });

        expect(reducer(initialState, {
            type: SHOW_OVERLAY
        })).toEqual(expectedState);
    });

    it('should handle HIDE_OVERLAY', () => {
        const initialState = fromJS({
            show: true
        });

        const expectedState = fromJS({
            show: false
        });

        expect(reducer(initialState, {
            type: HIDE_OVERLAY
        })).toEqual(expectedState);
    });
});
