import React from 'react';
import {shallow} from 'enzyme';

import {SignIn} from '../SignIn';

describe('Component: SignIn', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render four View components', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Component')).toHaveLength(4);
    });

    it('should render a Logo component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Logo')).toHaveLength(1);
    });

    it('should render a SignInForm component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('SignInForm')).toHaveLength(1);
    });

    it('should render a Text component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    describe('Method: componentShouldUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<SignIn/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });
});
