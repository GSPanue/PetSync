import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

import {Fade} from '../Fade';

describe('Component: Fade', () => {
    const minProps = {
        id: 'id',
        styles: null,
        children: <Text>Child</Text>,
        animationValue: null,
        animationType: null,
        animationComplete: false,
        addAnimation: () => {},
        removeAnimation: () => {},
        completeAnimation: () => {}
    };

    it('should render a single Fade component', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a Animated component', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
    });

    it('should contain a component passed as children prop', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    it('should have props for id, styles, children, animationValue, animationType, and animationComplete', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.id).toBeDefined();
        expect(instance.props.styles).toBeDefined();
        expect(instance.props.children).toBeDefined();
        expect(instance.props.animationValue).toBeDefined();
        expect(instance.props.animationType).toBeDefined();
        expect(instance.props.animationComplete).toBeDefined();
    });

    it('should have props for addAnimation, removeAnimation, and completeAnimation', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.addAnimation).toBeDefined();
        expect(instance.props.removeAnimation).toBeDefined();
        expect(instance.props.completeAnimation).toBeDefined();
    });

    describe('Method: componentWillMount', () => {
        it('should call addAnimation', () => {
            const addAnimation = jest.fn();
            expect(addAnimation).toHaveBeenCalledTimes(0);

            const wrapper = shallow(<Fade {...minProps} addAnimation={addAnimation}/>);

            expect(addAnimation).toHaveBeenCalledTimes(1);
        });
    });
});
