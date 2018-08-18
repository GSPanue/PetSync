import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';

import {Fade} from '../withFade';

const WrappedComponent = () => {
    return (
        <Text/>
    )
};

describe('Component: withFade', () => {
    const minProps = {
        wrappedComponent: WrappedComponent,
        id: 'id',
        style: 1,
        enableTransform: false,
        fadeValue: null,
        fadeType: 'in',
        fadeComplete: false,
        addFadeAnimation: () => {},
        removeFadeAnimation: () => {},
        completeFadeAnimation: () => {}
    };

    it('should render a single Fade component', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should contain a AnimatedComponent component', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper.find('AnimatedComponent')).toHaveLength(1);
    });

    it('should contain a WrappedComponent component', () => {
        const wrapper = shallow(<Fade {...minProps}/>);

        expect(wrapper.find('WrappedComponent')).toHaveLength(1);
    });

    it('should have props for wrappedComponent, id, style, enableTransform', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.wrappedComponent).toBeDefined();
        expect(instance.props.id).toBeDefined();
        expect(instance.props.style).toBeDefined();
        expect(instance.props.enableTransform).toBeDefined();
    });

    it('should have props for fadeValue, fadeType, fadeComplete', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.fadeValue).toBeDefined();
        expect(instance.props.fadeType).toBeDefined();
        expect(instance.props.fadeComplete).toBeDefined();
    });

    it('should have props for addFadeAnimation, removeFadeAnimation, completeFadeAnimation', () => {
        const wrapper = shallow(<Fade {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.addFadeAnimation).toBeDefined();
        expect(instance.props.removeFadeAnimation).toBeDefined();
        expect(instance.props.fadeComplete).toBeDefined();
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should update when fadeValue is not null and fadeComplete is false', () => {
            const wrapper = shallow(<Fade {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate({
                fadeValue: {},
                fadeComplete: false
            })).toEqual(true);
        });

        it('should not update when fadeValue is null and fadeComplete is false', () => {
            const wrapper = shallow(<Fade {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate({
                fadeValue: null,
                fadeComplete: false
            })).toEqual(false);
        });

        it('should not update when fadeValue is not null and fadeComplete is true', () => {
            const wrapper = shallow(<Fade {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate({
                fadeValue: {},
                fadeComplete: true
            })).toEqual(false);
        });

        it('should not update when fadeValue is null and fadeComplete is true', () => {
            const wrapper = shallow(<Fade {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.shouldComponentUpdate({
                fadeValue: null,
                fadeComplete: true
            })).toEqual(false);
        });
    });

    describe('Method: createTransformProperty', () => {
        it('should return an empty array when enableTransform is false and fadeValue is null', () => {
            const wrapper = shallow(<Fade {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.createTransformProperty()).toEqual([]);
        });

        it('should return an empty array when enableTransform is true and fadeValue is null', () => {
            const wrapper = shallow(<Fade {...minProps} enableTransform={true}/>);
            const instance = wrapper.instance();

            expect(instance.createTransformProperty()).toEqual([]);
        });

        it('should return an empty array when enableTransform is false and fadeValue is not null', () => {
            const wrapper = shallow(<Fade {...minProps} fadeValue={{}}/>);
            const instance = wrapper.instance();

            expect(instance.createTransformProperty()).toEqual([]);
        });
    });
});
