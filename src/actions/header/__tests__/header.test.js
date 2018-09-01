import * as actions from '../header';
import {
    SHOW_HEADER,
    HIDE_HEADER
} from '../../../constants/actionTypes';

describe('Actions: Header', () => {
    it('should create an action to show the header', () => {
        const expectedAction = {
            type: SHOW_HEADER
        };

        expect(actions.showHeader()).toEqual(expectedAction);
    });

    it('should create an action to hide the header', () => {
        const expectedAction = {
            type: HIDE_HEADER
        };

        expect(actions.hideHeader()).toEqual(expectedAction);
    });
});
