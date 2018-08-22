import React from 'react';
import {shallow} from 'enzyme';

import Gradient from '../Gradient';

describe('Component: Gradient', () => {
    const minProps = {
        id: 'id'
    };

    it('should render without crashing', () => {
        const wrapper = shallow(<Gradient {...minProps}/>);

        expect(wrapper).toHaveLength(1);
    });

    it('should render a Defs component', () => {
        const wrapper = shallow(<Gradient {...minProps}/>);

        expect(wrapper.find('Defs')).toHaveLength(1);
    });

    it('should render a LinearGradient component', () => {
        const wrapper = shallow(<Gradient {...minProps}/>);

        expect(wrapper.find('LinearGradient')).toHaveLength(1);
    });

    it('should render seven Stop components', () => {
        const wrapper = shallow(<Gradient {...minProps}/>);

        expect(wrapper.find('Stop')).toHaveLength(7);
    });

    it('should pass id as props to LinearGradient', () => {
        const wrapper = shallow(<Gradient {...minProps}/>);

        expect(wrapper.find('LinearGradient').props().id).toBeDefined();
    });
});
