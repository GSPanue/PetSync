import React from 'react';
import {View} from 'react-native';
import {shallow} from 'enzyme';

import withZoom from '../withZoom';

describe('Component: withZoom', () => {
    const Component = () => <View/>;
    const WrappedComponent = withZoom({style: 0})(Component);

    it('should render without crashing', () => {
        const wrapper = shallow(<WrappedComponent/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should pass style as props to the Animatable.View component', () => {
        const wrapper = shallow(<WrappedComponent/>);

        expect(wrapper.find('withAnimatable(Component)').props().style).toBeDefined();
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false', () => {
            const wrapper = shallow(<WrappedComponent/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate()).toEqual(false);
        });
    });

    describe('Method: zoomOutScreen', () => {
        it('should call callback', () => {
            const wrapper = shallow(<WrappedComponent/>);
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
