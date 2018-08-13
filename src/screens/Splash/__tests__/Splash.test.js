import React from 'react';
import {shallow} from 'enzyme';

import {Splash} from '../Splash';

describe('Component: Splash', () => {
    const minProps = {
        animationType: null,
        animationComplete: false,
        changeAnimation: () => {}
    };

    it('should render a single Splash component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a Fade component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper.find('Connect(Fade)')).toHaveLength(1);
    });

    it('should contain a Logo component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper.find('Logo')).toHaveLength(1);
    });

    it('should have props for animationType, animationComplete, and changeAnimation', () => {
        const wrapper = shallow(<Splash {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.animationType);
        expect(instance.props.animationComplete);
        expect(instance.props.changeAnimation);
    });
});
