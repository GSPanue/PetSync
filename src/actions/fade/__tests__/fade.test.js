import * as actions from '../fade';
import {
    ADD_ANIMATION,
    REMOVE_ANIMATION,
    CHANGE_ANIMATION,
    COMPLETE_ANIMATION
} from '../../../constants/actionTypes';

describe('Actions: Fade', () => {
    it('should create an action to add an animation', () => {
        const id = 'id', value = 'value', type = 'type';
        const expectedAction = {
            type: ADD_ANIMATION,
            payload: {
                id,
                value,
                type
            }
        };

        expect(actions.addAnimation(id, value, type)).toEqual(expectedAction);
    });

    it('should create an action to remove an animation', () => {
        const id = 'id';
        const expectedAction = {
            type: REMOVE_ANIMATION,
            payload: {
                id
            }
        };

        expect(actions.removeAnimation(id)).toEqual(expectedAction);
    });

    it('should create an action to change an animation', () => {
        const id = 'id', type = 'type';
        const expectedAction = {
            type: CHANGE_ANIMATION,
            payload: {
                id,
                type
            }
        };

        expect(actions.changeAnimation(id, type)).toEqual(expectedAction);
    });

    it('should create an action to complete an animation', () => {
        const id = 'id';
        const expectedAction = {
            type: COMPLETE_ANIMATION,
            payload: {
                id
            }
        };

        expect(actions.completeAnimation(id)).toEqual(expectedAction);
    });
});
