import * as actions from '../fade';
import {
    ADD_FADE_ANIMATION,
    REMOVE_FADE_ANIMATION,
    CHANGE_FADE_ANIMATION,
    COMPLETE_FADE_ANIMATION
} from '../../../constants/actionTypes';

describe('Actions: Fade', () => {
    it('should create an action to add a fade animation', () => {
        const id = 'id', value = 'value', type = 'type';
        const expectedAction = {
            type: ADD_FADE_ANIMATION,
            payload: {
                id,
                value,
                type
            }
        };

        expect(actions.addFadeAnimation(id, value, type)).toEqual(expectedAction);
    });

    it('should create an action to remove a fade animation', () => {
        const id = 'id';
        const expectedAction = {
            type: REMOVE_FADE_ANIMATION,
            payload: {
                id
            }
        };

        expect(actions.removeFadeAnimation(id)).toEqual(expectedAction);
    });

    it('should create an action to change a fade animation', () => {
        const id = 'id', type = 'type';
        const expectedAction = {
            type: CHANGE_FADE_ANIMATION,
            payload: {
                id,
                type
            }
        };

        expect(actions.changeFadeAnimation(id, type)).toEqual(expectedAction);
    });

    it('should create an action to complete a fade animation', () => {
        const id = 'id';
        const expectedAction = {
            type: COMPLETE_FADE_ANIMATION,
            payload: {
                id
            }
        };

        expect(actions.completeFadeAnimation(id)).toEqual(expectedAction);
    });
});
