import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

import {Fade} from '../Fade';

describe('Component: Fade', () => {
    const minProps = {
        id: 'id',
        styles: null,
        children: <Text>Child</Text>,
        fadeValue: null,
        fadeType: null,
        fadeComplete: false,
        addFadeAnimation: () => {},
        removeFadeAnimation: () => {},
        completeFadeAnimation: () => {}
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

    it('should have props for id, styles, children, fadeValue, fadeType, and fadeComplete', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.id).toBeDefined();
        expect(instance.props.styles).toBeDefined();
        expect(instance.props.children).toBeDefined();
        expect(instance.props.fadeValue).toBeDefined();
        expect(instance.props.fadeType).toBeDefined();
        expect(instance.props.fadeComplete).toBeDefined();
    });

    it('should have props for addFadeAnimation, removeFadeAnimation, and completeFadeAnimation', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.addFadeAnimation).toBeDefined();
        expect(instance.props.removeFadeAnimation).toBeDefined();
        expect(instance.props.completeFadeAnimation).toBeDefined();
    });

    describe('Method: componentWillMount', () => {
        it('should call addFadeAnimation', () => {
            const addFadeAnimation = jest.fn();
            expect(addFadeAnimation).toHaveBeenCalledTimes(0);

            const wrapper = shallow(<Fade {...minProps} addFadeAnimation={addFadeAnimation}/>);

            expect(addFadeAnimation).toHaveBeenCalledTimes(1);
        });
    });
});
