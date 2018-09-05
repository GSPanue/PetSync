import * as actions from '../overlay';
import {
    SHOW_OVERLAY,
    HIDE_OVERLAY
} from '../../../constants/actionTypes';

describe('Actions: Overlay', () => {
    it('should create an action to show the overlay', () => {
        const expectedAction = {
            type: SHOW_OVERLAY
        };

        expect(actions.showOverlay()).toEqual(expectedAction);
    });

    it('should create an action to hide the overlay', () => {
        const expectedAction = {
            type: HIDE_OVERLAY
        };

        expect(actions.hideOverlay()).toEqual(expectedAction);
    });
});
