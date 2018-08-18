import React from 'react';
import {shallow} from 'enzyme';

import {Splash} from '../Splash';

describe('Component: Splash', () => {
    const minProps = {
        fadeType: null,
        fadeComplete: false,
        changeFadeAnimation: () => {}
    };

    it('should render a single Splash component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a Logo component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper.find('Logo')).toHaveLength(1);
    });

    it('should have props for fadeType, fadeComplete, and changeFadeAnimation', () => {
        const wrapper = shallow(<Splash {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.fadeType);
        expect(instance.props.fadeComplete);
        expect(instance.props.changeFadeAnimation);
    });
});
