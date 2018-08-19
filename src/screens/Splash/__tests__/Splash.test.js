import React from 'react';
import {shallow} from 'enzyme';

import {Splash} from '../Splash';

describe('Component: Splash', () => {
    const minProps = {
        currentScreen: 'Splash',
        changeScreen: () => {},
        changeScreenComplete: () => {}
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

        expect(instance.props.currentScreen);
        expect(instance.props.changeScreen);
        expect(instance.props.changeScreenComplete);
    });
});
