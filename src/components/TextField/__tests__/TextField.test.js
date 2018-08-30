import React from 'react';
import {shallow} from 'enzyme';

import TextField from '../TextField';

describe('Component: TextField', () => {
    const minProps = {
        name: 'name',
        label: 'label',
        value: '',
        setFieldValue: () => {},
        setFieldTouched: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Form component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Styled(Form)')).toHaveLength(1);
    });

    it('should render a Item component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Styled(Item)')).toHaveLength(1);
    });

    it('should render a Label component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Styled(Label)')).toHaveLength(1);
    });

    it('should render a Input component', () => {
        const wrapper = shallow(<TextField {...minProps}/>);

        expect(wrapper.find('Styled(Input)')).toHaveLength(1);
    });

    it('should have props for name, label, value, setFieldValue, and setFieldTouched', () => {
        const wrapper = shallow(<TextField {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.name).toBeDefined();
        expect(instance.props.label).toBeDefined();
        expect(instance.props.value).toBeDefined();
        expect(instance.props.setFieldValue).toBeDefined();
        expect(instance.props.setFieldTouched).toBeDefined();
    });

    it('should have props for touched, autoCorrect, keyboardType, secureTextEntry, and error', () => {
        const props = {
            touched: false,
            autoCorrect: false,
            keyboardType: 'email-address',
            secureTextEntry: false,
            error: 'error'
        };

        const wrapper = shallow(<TextField {...minProps} {...props}/>);
        const instance = wrapper.instance();

        expect(instance.props.touched).toBeDefined();
        expect(instance.props.autoCorrect).toBeDefined();
        expect(instance.props.keyboardType).toBeDefined();
        expect(instance.props.secureTextEntry).toBeDefined();
        expect(instance.props.error).toBeDefined();
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
                item: {
                    borderColor: '#5571B6'
                },
                label: {
                    color: '#5571B6'
                },
                input: {}
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });

        it('should return an object for an untouched text field with no input', () => {
            const wrapper = shallow(<TextField {...minProps} touched={false}/>);
            const instance = wrapper.instance();

            const expectedResult = {
                item: {
                    borderColor: '#CCCCCC'
                },
                label: {
                    color: '#CCCCCC'
                },
                input: {
                    color: '#CCCCCC'
                }
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });

        it('should return an object for an untouched text field with input', () => {
            const wrapper = shallow(<TextField {...minProps} value='value' touched={false}/>);
            const instance = wrapper.instance();

            const expectedResult = {
                item: {
                    borderColor: '#CCCCCC'
                },
                label: {
                    color: '#CCCCCC'
                },
                input: {
                    color: '#8E8E8E'
                }
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });

        it('should return an object for a text field with an error', () => {
            const wrapper = shallow(<TextField {...minProps} error='error'/>);
            const instance = wrapper.instance();

            const expectedResult = {
                item: {
                    borderColor: '#D24C4C'
                },
                label: {
                    color: '#D24C4C'
                },
                input: {
                    color: '#CCCCCC'
                }
            };

            expect(instance.getExtraStyles()).toEqual(expectedResult);
        });
    });
});
