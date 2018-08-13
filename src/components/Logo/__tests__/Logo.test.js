import React from 'react';
import {shallow} from 'enzyme';

import Logo from '../Logo';

describe('Component: Logo', () => {
    const minProps = {
        height: '125',
        width: '125'
    };

    it('should render a single Logo component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a Svg component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Svg')).toHaveLength(1);
    });

    it('should contain a Defs component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Defs')).toHaveLength(1);
    });

    it('should contain a LinearGradient component', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('LinearGradient')).toHaveLength(1);
    });

    it('should contain a G component when disableTransparency prop is true', () => {
        const wrapper = shallow(<Logo {...minProps} disableTransparency={true}/>);

        expect(wrapper.find('G')).toHaveLength(1);
    });

    it('should not contain a G component when disableTransparency prop is false', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('G')).toHaveLength(0);
    });

    it('should be a gradient colour when inactive is false', () => {
        const wrapper = shallow(<Logo {...minProps}/>);

        expect(wrapper.find('Path').props().fill).toEqual('url(#logoGradient)');
    });

    it('should be a light grey colour when inactive is true', () => {
        const wrapper = shallow(<Logo {...minProps} inactive={true}/>);

        expect(wrapper.find('Path').props().fill).toEqual('#CCCCCC');
    });

    it('should have props for height, width, inactive, and disableTransparency', () => {
        const wrapper = shallow(<Logo {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.height).toBeDefined();
        expect(instance.props.width).toBeDefined();
        expect(instance.props.inactive).toBeDefined();
        expect(instance.props.disableTransparency).toBeDefined();
    });
});
