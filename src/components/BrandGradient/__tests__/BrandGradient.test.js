import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

import BrandGradient from '../BrandGradient';

describe('Component: BrandGradient', () => {
    const minProps = {
        children: <Text/>,
        style: {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<BrandGradient {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a LinearGradient component', () => {
        const wrapper = shallow(<BrandGradient {...minProps}/>);

        expect(wrapper.find('LinearGradient')).toHaveLength(1);
    });

    it('should render its children', () => {
        const wrapper = shallow(<BrandGradient {...minProps}/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    it('should pass style as props to the LinearGradient component', () => {
        const wrapper = shallow(<BrandGradient {...minProps}/>);

        expect(wrapper.find('LinearGradient').props().style).toBeDefined();
    });
});
