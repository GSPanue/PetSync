import React from 'react';
import {shallow} from 'enzyme';

import GradientText from '../GradientText';

describe('Component: GradientText', () => {
    const minProps = {
        text: 'text',
        style: {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<GradientText {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a LinearTextGradient component', () => {
        const wrapper = shallow(<GradientText {...minProps}/>);

        expect(wrapper.find('RNLinearTextGradient')).toHaveLength(1);
    });
});
