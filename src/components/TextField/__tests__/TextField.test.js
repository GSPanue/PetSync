import React from 'react';
import {shallow} from 'enzyme';

import TextField from '../TextField';

describe('Component: TextField', () => {
    const minProps = {
        name: 'name',
        value: '',
        setFieldValue: () => {},
        setFieldTouched: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a TouchableWithoutFeedback component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(1);
    });

    it('should render a View component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Component')).toHaveLength(1);
    });

    it('should render a TextInput component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('TextInput')).toHaveLength(1);
    });

    it('should render a Icon component when icon is not undefined', () => {
        const wrapper = shallow(<TextField {...minProps} icon='at-sign'/>);

        expect(wrapper.find('Styled(Icon)')).toHaveLength(1);
    });

    it('should not render a Icon component when icon is undefined', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Styled(Icon)')).toHaveLength(0);
    });

    it('should have props for name, value, setFieldValue, and setFieldTouched', () => {
        const wrapper = shallow(<TextField {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.name).toBeDefined();
        expect(instance.props.value).toBeDefined();
        expect(instance.props.setFieldValue).toBeDefined();
        expect(instance.props.setFieldTouched).toBeDefined();
    });

    it('should have props for placeholder, icon, touched, autoCorrect, keyboardType, and secureTextEntry', () => {
        const props = {
            placeholder: 'placeholder',
            icon: 'icon',
            touched: false,
            autoCorrect: false,
            keyboardType: 'email-address',
            secureTextEntry: false
        };

        const wrapper = shallow(<TextField {...minProps} {...props}/>);
        const instance = wrapper.instance();

        expect(instance.props.placeholder).toBeDefined();
        expect(instance.props.icon).toBeDefined();
        expect(instance.props.touched).toBeDefined();
        expect(instance.props.autoCorrect).toBeDefined();
        expect(instance.props.keyboardType).toBeDefined();
        expect(instance.props.secureTextEntry).toBeDefined();
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false when touched has not changed', () => {
            const wrapper = shallow(<TextField {...minProps} touched={false}/>);
            const instance = wrapper.instance();

            const nextProps = {
                touched: false
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(false);
        });

        it('should return true when touched has changed', () => {
            const wrapper = shallow(<TextField {...minProps} touched={false}/>);
            const instance = wrapper.instance();

            const nextProps = {
                touched: true
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(true);
        });
    });

    describe('Method: handlePress', () => {
        it('should focus the text field', () => {
            const wrapper = shallow(<TextField {...minProps}/>);
            const instance = wrapper.instance();

            const focus = jest.fn();

            instance.textField = {
                current: {
                    focus: focus
                }
            };

            expect(focus).toHaveBeenCalledTimes(0);
            instance.handlePress();
            expect(focus).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleChange', () => {
        it('should call setFieldValue', () => {
            const setFieldValue = jest.fn();
            const wrapper = shallow(<TextField {...minProps} setFieldValue={setFieldValue}/>);
            const instance = wrapper.instance();

            expect(setFieldValue).toHaveBeenCalledTimes(0);
            instance.handleChange('text');
            expect(setFieldValue).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleFocus', () => {
        it('should call setFieldTouched', () => {
            const setFieldTouched = jest.fn();
            const wrapper = shallow(<TextField {...minProps} setFieldTouched={setFieldTouched}/>);
            const instance = wrapper.instance();

            expect(setFieldTouched).toHaveBeenCalledTimes(0);
            instance.handleBlur();
            expect(setFieldTouched).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleBlur', () => {
        it('should call setFieldTouched', () => {
            const setFieldTouched = jest.fn();
            const wrapper = shallow(<TextField {...minProps} setFieldTouched={setFieldTouched}/>);
            const instance = wrapper.instance();

            expect(setFieldTouched).toHaveBeenCalledTimes(0);
            instance.handleBlur();
            expect(setFieldTouched).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: getExtraStyles', () => {
        it('should return an object for a touched text field', () => {
            const wrapper = shallow(<TextField {...minProps} touched={true}/>);
            const instance = wrapper.instance();

            const expectedResult = {
                pointerEvents: 'box-none',
                color: '#5571B6',
                textColor: '#5571B6'
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });

        it('should return an object for an untouched text field with no input', () => {
            const wrapper = shallow(<TextField {...minProps} touched={false}/>);
            const instance = wrapper.instance();

            const expectedResult = {
                pointerEvents: 'box-only',
                color: '#CCCCCC',
                textColor: '#CCCCCC'
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });

        it('should return an object for an untouched text field with input', () => {
            const wrapper = shallow(<TextField {...minProps} value='value' touched={false}/>);
            const instance = wrapper.instance();

            const expectedResult = {
                pointerEvents: 'box-only',
                color: '#CCCCCC',
                textColor: '#8E8E8E'
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });
    });
});
