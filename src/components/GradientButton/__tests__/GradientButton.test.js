import React from 'react';
import {shallow} from 'enzyme';

import GradientButton from '../GradientButton';

describe('Component: GradientButton', () => {
    const minProps = {
        title: 'title',
        disabled: false
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<GradientButton {...minProps}/>);

        expect(wrapper).toHaveLength(1);
        console.log(wrapper.debug());
    });

    it('should render a TouchableOpacity component', () => {
        const wrapper = shallow(<GradientButton {...minProps}/>);

        expect(wrapper.find('Styled(TouchableOpacity)')).toHaveLength(1);
    });

    it('should render a BrandGradient component', () => {
        const wrapper = shallow(<GradientButton {...minProps}/>);

        expect(wrapper.find('Styled(BrandGradient)')).toHaveLength(1);
    });

    it('should render a Text component', () => {
        const wrapper = shallow(<GradientButton {...minProps}/>);

        expect(wrapper.find('Styled(Text)')).toHaveLength(1);
    });

    it('should not render a BrandGradient component when disabled', () => {
        const wrapper = shallow(<GradientButton {...minProps} disabled={true}/>);

        expect(wrapper.find('Styled(BrandGradient)')).toHaveLength(0);
    });

    it('should have props for title and disabled', () => {
        const wrapper = shallow(<GradientButton {...minProps}/>);
        const instance = wrapper.instance();

        expect(instance.props.title).toBeDefined();
        expect(instance.props.disabled).toBeDefined();
    });
});
