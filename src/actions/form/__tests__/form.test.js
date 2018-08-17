import * as actions from '../form';
import {
    CHANGE_SELECTED_TEXT_FIELD,
    CHANGE_TEXT_FIELD_INPUT,
    CLEAR_TEXT_FIELD_INPUT
} from '../../../constants/actionTypes';

describe('Actions: Form', () => {
    it('should create an action to change the selected text field in a form', () => {
        const form = 'form', id = 'id';
        const expectedAction = {
            type: CHANGE_SELECTED_TEXT_FIELD,
            payload: {
                form,
                id
            }
        };

        expect(actions.changeSelectedTextField(form, id)).toEqual(expectedAction);
    });

    it('should create an action to change the input of a text field in a form', () => {
        const form = 'form', id = 'id', value = 'value';
        const expectedAction = {
            type: CHANGE_TEXT_FIELD_INPUT,
            payload: {
                form,
                id,
                value
            }
        };

        expect(actions.changeTextFieldInput(form, id, value)).toEqual(expectedAction);
    });

    it('should create an action to clear the input of a text field in a form', () => {
        const form = 'form', id = 'id';
        const expectedAction = {
            type: CLEAR_TEXT_FIELD_INPUT,
            payload: {
                form,
                id
            }
        };

        expect(actions.clearTextFieldInput(form, id)).toEqual(expectedAction);
    });
});
