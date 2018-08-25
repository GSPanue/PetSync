import React from 'react';
import {shallow} from 'enzyme';

import {Splash} from '../Splash';

describe('Component: Splash', () => {
    const minProps = {
        navigation: {
            navigate: () => {}
        },
        zoomOutScreen: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Logo component', () => {
        const wrapper = shallow(<Splash {...minProps}/>);

        expect(wrapper.find('Logo')).toHaveLength(1);
    });

    it('should have props for navigation and zoomOutScreen', () => {
        const wrapper = shallow(<Splash {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.navigation).toBeDefined();
        expect(instance.props.zoomOutScreen).toBeDefined();
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<Splash {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: componentWillUnmount', () => {
        it('should remove the back press listener', () => {
            const wrapper = shallow(<Splash {...minProps}/>);
            const instance = wrapper.instance();

            const remove = jest.fn();

            instance.backPressListener = {
                remove: remove
            };

            expect(remove).toHaveBeenCalledTimes(0);
            wrapper.unmount();
            expect(remove).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleBackPress', () => {
        it('should call goBack', () => {
            const goBack = jest.fn();
            const navigation = {navigation: {goBack: goBack}};

            const wrapper = shallow(<Splash {...minProps} {...navigation}/>);
            const instance = wrapper.instance();

            expect(goBack).toHaveBeenCalledTimes(0);
            instance.handleBackPress();
            expect(goBack).toHaveBeenCalledTimes(1);
        });

        it('should return true', () => {
            const navigation = {navigation: {goBack: jest.fn()}};

            const wrapper = shallow(<Splash {...minProps} {...navigation}/>);
            const instance = wrapper.instance();

            expect(instance.handleBackPress()).toEqual(true);
        });
    });
});
