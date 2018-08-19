import * as actions from '../screen';
import {
    CHANGE_SCREEN,
    CHANGE_SCREEN_COMPLETE
} from '../../../constants/actionTypes';

describe('Actions: Screen', () => {
    it('it should create an action to change screen', () => {
        const screen = 'screen';
        const expectedAction = {
            type: CHANGE_SCREEN,
            payload: {
                screen
            }
        };

        expect(actions.changeScreen(screen)).toEqual(expectedAction);
    });

    it('should create an action to indicate that a screen has finished changing', () => {
        const expectedAction = {
            type: CHANGE_SCREEN_COMPLETE
        };

        expect(actions.changeScreenComplete()).toEqual(expectedAction);
    });
});
