import React from 'react';
import {shallow} from 'enzyme';

import FormField from '../FormField';

describe('Component: FormField', () => {
    const minProps = {
        name: 'name',
        label: 'label',
        defaultValue: 'value',
        touched: false,
        error: false,
        setFieldValue: () => {},
        setFieldTouched: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<FormField {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a View component', () => {
        const wrapper = shallow(<FormField {...minProps}/>);

        expect(wrapper.find('Styled(Component)')).toHaveLength(1);
    });

    it('should render a Item component', () => {
        const wrapper = shallow(<FormField {...minProps}/>);

        expect(wrapper.find('Styled(Styled(Item))')).toHaveLength(1);
    });

    it('should render a Label component', () => {
        const wrapper = shallow(<FormField {...minProps}/>);

        expect(wrapper.find('Styled(Styled(Label))')).toHaveLength(1);
    });

    it('should render a Input component', () => {
        const wrapper = shallow(<FormField {...minProps}/>);

        expect(wrapper.find('Styled(Styled(Input))')).toHaveLength(1);
    });

    it('should have props for name, label, defaultValue, touched, error, setFieldValue, and setFieldTouched', () => {
        const wrapper = shallow(<FormField {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.name).toBeDefined();
        expect(instance.props.label).toBeDefined();
        expect(instance.props.defaultValue).toBeDefined();
        expect(instance.props.touched).toBeDefined();
        expect(instance.props.error).toBeDefined();
        expect(instance.props.setFieldValue).toBeDefined();
        expect(instance.props.setFieldTouched).toBeDefined();
    });

    it('should have props for inputRef, returnKeyType, autoCorrect, and keyboardType', () => {
        const props = {
            inputRef: {},
            returnKeyType: 'done',
            autoCorrect: false,
            keyboardType: 'default'
        };

        const wrapper = shallow(<FormField {...minProps} {...props}/>);
        const instance = wrapper.instance();

        expect(instance.props.inputRef).toBeDefined();
        expect(instance.props.returnKeyType).toBeDefined();
        expect(instance.props.autoCorrect).toBeDefined();
        expect(instance.props.keyboardType).toBeDefined();
    });

    it('should have props for secureTextEntry, blurOnSubmit, and onSubmitEditing', () => {
        const props = {
            secureTextEntry: false,
            blurOnSubmit: false,
            onSubmitEditing: () => {}
        };

        const wrapper = shallow(<FormField {...minProps} {...props}/>);
        const instance = wrapper.instance();

        expect(instance.props.secureTextEntry).toBeDefined();
        expect(instance.props.blurOnSubmit).toBeDefined();
        expect(instance.props.onSubmitEditing).toBeDefined();
    });

    describe('Method: shouldComponentUpdate', () => {
        it('should return false when touched has not changed', () => {
            const wrapper = shallow(<FormField {...minProps}/>);
            const instance = wrapper.instance();

            const nextProps = {
                touched: false
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(false);
        });

        it('should return true when touched has changed', () => {
            const wrapper = shallow(<FormField {...minProps}/>);
            const instance = wrapper.instance();

            const nextProps = {
                touched: true
            };

            expect(instance.shouldComponentUpdate(nextProps)).toEqual(true);
        });
    });

    describe('Method: onSubmitEditing', () => {
        it('should call handleSubmitEditing', () => {
            const handleSubmitEditing = jest.fn();
            const wrapper = shallow(<FormField {...minProps} handleSubmitEditing={handleSubmitEditing}/>);
            const instance = wrapper.instance();

            expect(handleSubmitEditing).toHaveBeenCalledTimes(0);
            instance.onSubmitEditing();
            expect(handleSubmitEditing).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleChange', () => {
        it('should call setFieldValue', () => {
            const setFieldValue = jest.fn();
            const wrapper = shallow(<FormField {...minProps} setFieldValue={setFieldValue}/>);
            const instance = wrapper.instance();

            expect(setFieldValue).toHaveBeenCalledTimes(0);
            instance.handleChange('text');
            expect(setFieldValue).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleFocus', () => {
        it('should call setFieldTouched', () => {
            const setFieldTouched = jest.fn();
            const wrapper = shallow(<FormField {...minProps} setFieldTouched={setFieldTouched}/>);
            const instance = wrapper.instance();

            expect(setFieldTouched).toHaveBeenCalledTimes(0);
            instance.handleBlur();
            expect(setFieldTouched).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: handleBlur', () => {
        it('should call setFieldTouched', () => {
            const setFieldTouched = jest.fn();
            const wrapper = shallow(<FormField {...minProps} setFieldTouched={setFieldTouched}/>);
            const instance = wrapper.instance();

            expect(setFieldTouched).toHaveBeenCalledTimes(0);
            instance.handleBlur();
            expect(setFieldTouched).toHaveBeenCalledTimes(1);
        });
    });
});
