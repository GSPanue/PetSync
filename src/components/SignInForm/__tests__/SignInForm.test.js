import React from 'react';
import {shallow} from 'enzyme';

import SignInForm from '../SignInForm';

describe('Component: SignInForm', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<SignInForm/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Formik component', () => {
        const wrapper = shallow(<SignInForm/>);

        expect(wrapper.find('Formik')).toHaveLength(1);
    });

    it('should render two TextField components', () => {
        const wrapper = shallow(<SignInForm/>).dive();

        expect(wrapper.find('TextField')).toHaveLength(2);
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<SignInForm/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: componentWillUnmount', () => {
        it('should remove the keyboard listener', () => {
            const wrapper = shallow(<SignInForm/>);
            const instance = wrapper.instance();

            const remove = jest.fn();

            instance.keyboardDidHideListener = {
                remove: remove
            };

            expect(remove).toHaveBeenCalledTimes(0);
            wrapper.unmount();
            expect(remove).toHaveBeenCalledTimes(1);
        });
    });
});
