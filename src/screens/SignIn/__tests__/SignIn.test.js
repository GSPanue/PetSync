import React from 'react';
import {shallow} from 'enzyme';

import {SignIn} from '../SignIn';

describe('Component: SignIn', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render two View components', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Styled(Component)')).toHaveLength(1);
    });

    it('should render a SpinnerOverlay component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Connect(SpinnerOverlay)')).toHaveLength(1);
    });

    it('should render a SignInHeader component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Connect(SignInHeader)')).toHaveLength(1);
    });

    it('should render a SignInForm component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('Connect(SignInForm)')).toHaveLength(1);
    });

    it('should render a SignInFooter component', () => {
        const wrapper = shallow(<SignIn/>);

        expect(wrapper.find('SignInFooter')).toHaveLength(1);
    });

    describe('Method: componentShouldUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<SignIn/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });
});
