import React from 'react';
import {shallow} from 'enzyme';

import TextButton from '../TextButton';

describe('Component: TextButton', () => {
    const minProps = {
        title: 'title',
        style: {},
        onPress: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<TextButton {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render two View components', () => {
        const wrapper = shallow(<TextButton {...minProps}/>);

        expect(wrapper.find('Styled(Component)')).toHaveLength(2);
    });

    it('should render a TouchableOpacity component', () => {
        const wrapper = shallow(<TextButton {...minProps}/>);

        expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    });

    it('should render a Text component', () => {
        const wrapper = shallow(<TextButton {...minProps}/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    it('should have props for title, style, and onPress', () => {
        const wrapper = shallow(<TextButton {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.title).toBeDefined();
        expect(instance.props.style).toBeDefined();
        expect(instance.props.onPress).toBeDefined();
    });

    it('should call handlePress when TouchableOpacity is pressed', () => {
        const spy = spyOn(TextButton.prototype, 'handlePress');
        const wrapper = shallow(<TextButton {...minProps}/>);

        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('TouchableOpacity').first().props().onPress();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<TextButton {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: handlePress', () => {
        it('should call onPress', () => {
            const onPress = jest.fn();
            const wrapper = shallow(<TextButton {...minProps} onPress={onPress}/>);
            const instance = wrapper.instance();

            expect(onPress).toHaveBeenCalledTimes(0);
            instance.handlePress();
            expect(onPress).toHaveBeenCalledTimes(1);
        });
    });
});
