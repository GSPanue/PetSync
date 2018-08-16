import * as actions from '../textField';
import {
    CHANGE_SELECTED_TEXT_FIELD,
    UPDATE_INPUT,
    CLEAR_INPUT
} from '../../../constants/actionTypes';

describe('Actions: TextField', () => {
    it('should create an action to change the selected text field', () => {
        const id = 'id';
        const expectedAction = {
            type: CHANGE_SELECTED_TEXT_FIELD,
            payload: {
                id
            }
        };

        expect(actions.changeSelectedTextField(id)).toEqual(expectedAction);
    });

    it('should create an action to update a text fields input', () => {
        const id = 'id', value = 'value';
        const expectedAction = {
            type: UPDATE_INPUT,
            payload: {
                id,
                value
            }
        };

        expect(actions.updateInput(id, value)).toEqual(expectedAction);
    });

    it('should create an action to clear a text fields input', () => {
        const id = 'id';
        const expectedAction = {
            type: CLEAR_INPUT,
            payload: {
                id
            }
        };

        expect(actions.clearInput(id)).toEqual(expectedAction);
    });
});
