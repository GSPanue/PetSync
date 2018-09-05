import React from 'react';
import {shallow} from 'enzyme';

import GradientTextButton from '../GradientTextButton';

describe('Component: GradientTextButton', () => {
    const minProps = {
        text: 'text',
        style: {},
        onPress: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<GradientTextButton {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a TouchableOpacity component', () => {
        const wrapper = shallow(<GradientTextButton {...minProps}/>);

        expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    });

    it('should render a GradientText component', () => {
        const wrapper = shallow(<GradientTextButton {...minProps}/>);

        expect(wrapper.find('Styled(GradientText)')).toHaveLength(1);
    });

    it('should have props for text, style, and onPress', () => {
        const wrapper = shallow(<GradientTextButton {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.text).toBeDefined();
        expect(instance.props.style).toBeDefined();
        expect(instance.props.onPress).toBeDefined();
    });

    it('should call handlePress when TouchableOpacity is pressed', () => {
        const spy = spyOn(GradientTextButton.prototype, 'handlePress');
        const wrapper = shallow(<GradientTextButton {...minProps}/>);

        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('TouchableOpacity').first().props().onPress();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<GradientTextButton {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: handlePress', () => {
        it('should call onPress', () => {
            const onPress = jest.fn();
            const wrapper = shallow(<GradientTextButton {...minProps} onPress={onPress}/>);
            const instance = wrapper.instance();

            expect(onPress).toHaveBeenCalledTimes(0);
            instance.handlePress();
            expect(onPress).toHaveBeenCalledTimes(1);
        });
    });
});
