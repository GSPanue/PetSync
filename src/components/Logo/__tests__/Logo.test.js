import React from 'react';
import {shallow} from 'enzyme';

import Logo from '../Logo';

describe('Component: Logo', () => {
    const minProps = {
        height: '125',
        width: '125',
        fill: ''
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Overlay component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Overlay')).toHaveLength(1);
    });

    it('should render a Underlay component when disableTransparency is true', () => {
        const wrapper = shallow(<Logo {...minProps} disableTransparency={true}/>);

        expect(wrapper.find('Underlay')).toHaveLength(1);
    });

    it('should not render a Underlay component when disableTransparency is false', () => {
        const wrapper = shallow(<Logo {...minProps} disableTransparency={false}/>);

        expect(wrapper.find('Underlay')).toHaveLength(0);
    });

    it('should pass height and width as props to the Svg component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Svg').props().height).toBeDefined();
        expect(wrapper.find('Svg').props().width).toBeDefined();
    });

    it('should pass id, fill, and active as props to the Overlay component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Overlay').props().id).toBeDefined();
        expect(wrapper.find('Overlay').props().fill).toBeDefined();
        expect(wrapper.find('Overlay').props().active).toBeDefined();
    });
});
