import React from 'react';
import {shallow} from 'enzyme';

import SignInFooter from '../SignInFooter';

describe('Component: SignInFooter', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<SignInFooter/>);

        expect(wrapper).toHaveLength(1);
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<SignInFooter/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: handlePress', () => {
        /**
         * ToDo: Test
         */
    });
});
