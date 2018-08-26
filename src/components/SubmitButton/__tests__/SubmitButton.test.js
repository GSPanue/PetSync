import React from 'react';
import {shallow} from 'enzyme';

import SubmitButton from '../SubmitButton';

describe('Component: SubmitButton', () => {
    const minProps = {
        title: 'title',
        submit: () => {}
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<SubmitButton {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render two View components', () => {
        const wrapper = shallow(<SubmitButton {...minProps}/>);

        expect(wrapper.find('Component')).toHaveLength(2);
    });

    it('should render a Button component', () => {
        const wrapper = shallow(<SubmitButton {...minProps}/>);

        expect(wrapper.find('Styled(Button)')).toHaveLength(1);
    });

    it('should render a Text component', () => {
        const wrapper = shallow(<SubmitButton {...minProps}/>);

        expect(wrapper.find('Text')).toHaveLength(1);
    });

    it('should have props for title, position, width, and submit', () => {
        const props = {
            position: 'left',
            width: '50%'
        };

        const wrapper = shallow(<SubmitButton {...minProps} {...props}/>);
        const instance = wrapper.instance();

        expect(instance.props.title).toBeDefined();
        expect(instance.props.position).toBeDefined();
        expect(instance.props.width).toBeDefined();
        expect(instance.props.submit).toBeDefined();
    });

    describe('Method: handlePress', () => {
        it('should call submit', () => {
            const submit = jest.fn();
            const wrapper = shallow(<SubmitButton {...minProps} submit={submit}/>);
            const instance = wrapper.instance();

            expect(submit).toHaveBeenCalledTimes(0);
            instance.handlePress();
            expect(submit).toHaveBeenCalledTimes(1);
        });
    });

    describe('Method: getAlignment', () => {
        it('should return flex-start', () => {
            const wrapper = shallow(<SubmitButton {...minProps} position='left'/>);
            const instance = wrapper.instance();

            expect(instance.getAlignment()).toEqual('flex-start');

            wrapper.setProps({
                position: 'position'
            });

            expect(instance.getAlignment()).toEqual('flex-start');
        });

        it('should return flex-end', () => {
            const wrapper = shallow(<SubmitButton {...minProps}/>);
            const instance = wrapper.instance();

            expect(instance.getAlignment()).toEqual('flex-end');

            wrapper.setProps({
                position: 'right'
            });

            expect(instance.getAlignment()).toEqual('flex-end');
        });

        it('should return center', () => {
            const wrapper = shallow(<SubmitButton {...minProps} position='center'/>);
            const instance = wrapper.instance();

            expect(instance.getAlignment()).toEqual('center');
        });
    });
});
