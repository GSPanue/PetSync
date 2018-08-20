import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

import {Zoom} from '../withZoom';

const WrappedComponent = () => {
    return (
        <Text/>
    )
};

describe('Component: withZoom', () => {
    const minProps = {
        wrappedComponent: WrappedComponent,
        currentScreen: 'Splash',
        nextScreen: null,
        style: 1
    };

    it('should render a single Zoom component', () => {
        const wrapper = shallow(<Zoom {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a WrappedComponent component', () => {
        const wrapper = shallow(<Zoom {...minProps}/>);

        expect(wrapper.find('WrappedComponent')).toHaveLength(1);
    });

    it('should have props for wrappedComponent, currentScreen, nextScreen, and style', () => {
        const wrapper = shallow(<Zoom {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.wrappedComponent).toBeDefined();
        expect(instance.props.currentScreen).toBeDefined();
        expect(instance.props.nextScreen).toBeDefined();
        expect(instance.props.style).toBeDefined();
    });

    describe('Method: componentWillReceiveProps', () => {
        it('should call changeScreen when nextScreen is not null and not equal to currentScreen', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            instance.changeScreen = jest.fn();
            expect(instance.changeScreen).toHaveBeenCalledTimes(0);

            instance.componentWillReceiveProps({
                currentScreen: 'Splash',
                nextScreen: 'SignIn'
            });

            expect(instance.changeScreen).toHaveBeenCalledTimes(1);
        });

        it('should not call changeScreen when nextScreen is null', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            instance.changeScreen = jest.fn();
            expect(instance.changeScreen).toHaveBeenCalledTimes(0);

            instance.componentWillReceiveProps({
                currentScreen: 'Splash',
                nextScreen: null
            });

            expect(instance.changeScreen).toHaveBeenCalledTimes(0);
        });

        it('should not call changeScreen when nextScreen is equal to currentScreen', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            instance.changeScreen = jest.fn();
            expect(instance.changeScreen).toHaveBeenCalledTimes(0);

            instance.componentWillReceiveProps({
                currentScreen: 'Splash',
                nextScreen: 'Splash'
            });

            expect(instance.changeScreen).toHaveBeenCalledTimes(0);
        });
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: changeScreen', () => {
        it('should call zoomOutScreen', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            instance.zoomOutScreen = jest.fn();
            expect(instance.zoomOutScreen).toHaveBeenCalledTimes(0);

            instance.changeScreen('SignIn');

            expect(instance.zoomOutScreen).toHaveBeenCalledTimes(1);
        });

        it('should call navigate', () => {
            const navigation = {
                navigate: jest.fn()
            };

            const wrapper = shallow(<Zoom {...minProps} navigation={navigation}/>);
            const instance = wrapper.instance();

            instance.zoomOutScreen = jest.fn((callback) => {
                callback();
            });

            expect(navigation.navigate).toHaveBeenCalledTimes(0);

            instance.changeScreen('SignIn');

            expect(navigation.navigate).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: zoomOutScreen', () => {
        it('should call callback', () => {
            const wrapper = shallow(<Zoom {...minProps}/>);
            const instance = wrapper.instance();

            const callback = jest.fn();

            instance.view = {
                current: {
                    zoomOut: jest.fn(() => {
                        return {
                            done: jest.fn((callback) => {
                                callback();
                            })
                        }
                    })
                }
            };

            expect(callback).toHaveBeenCalledTimes(0);

            instance.zoomOutScreen(callback);

            expect(callback).toHaveBeenCalledTimes(1);
        });
    });
});
