import React from 'react';
import {shallow} from 'enzyme';

import ErrorMessage from '../ErrorMessage';

describe('Component: ErrorMessage', () => {
    const minProps = {
        message: 'message',
        style: {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<ErrorMessage {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a View component', () => {
        const wrapper = shallow(<ErrorMessage {...minProps}/>);

        expect(wrapper.find('Styled(Component)')).toHaveLength(1);
    });

    it('should render a Text component', () => {
        const wrapper = shallow(<ErrorMessage {...minProps}/>);

        expect(wrapper.find('Styled(Text)')).toHaveLength(1);
    });

    it('should pass message as props to the Text component', () => {
        const wrapper = shallow(<ErrorMessage {...minProps}/>);

        expect(wrapper.find('Styled(Text)').props().children).toBeDefined();
    });

    it('should pass style as props to the View component', () => {
        const wrapper = shallow(<ErrorMessage {...minProps}/>);

        expect(wrapper.find('Styled(Component)').props().style).toBeDefined();
    });
});
